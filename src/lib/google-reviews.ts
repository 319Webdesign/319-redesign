export type GoogleReview = {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  profile_photo_url?: string;
};

export type GoogleReviewsResponse = {
  reviews: GoogleReview[];
  placeName?: string;
  rating?: number | null;
  userRatingsTotal?: number | null;
  error?: string;
  usedFallback?: boolean;
  translatedToDe?: boolean;
};

const MAX_REVIEWS = 4;

async function fetchPlaceDetails(
  apiKey: string,
  placeId: string,
  lang: "de" | "none",
): Promise<Record<string, unknown>> {
  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json",
  );
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,reviews,user_ratings_total");
  url.searchParams.set("reviews_sort", "newest");
  if (lang === "de") url.searchParams.set("language", "de");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });
  return res.json();
}

async function translateTexts(
  texts: string[],
  apiKey: string,
): Promise<string[] | null> {
  try {
    const translateRes = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: texts, target: "de" }),
        cache: "no-store",
      },
    );
    const translateData = await translateRes.json();
    if (translateData?.error) return null;
    const translations = translateData?.data?.translations as
      | { translatedText: string }[]
      | undefined;
    if (!Array.isArray(translations) || translations.length !== texts.length) {
      return null;
    }
    return translations.map((t) => t.translatedText);
  } catch {
    return null;
  }
}

export async function getGoogleReviews(): Promise<GoogleReviewsResponse> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      error: "Google Places API nicht konfiguriert",
      reviews: [],
    };
  }

  try {
    const dataDe = await fetchPlaceDetails(apiKey, placeId, "de");

    if (dataDe.status !== "OK") {
      const errorMessage =
        dataDe.status === "REQUEST_DENIED"
          ? "REQUEST_DENIED – API-Key prüfen oder Places API aktivieren"
          : dataDe.status === "INVALID_REQUEST"
            ? "INVALID_REQUEST – Place ID prüfen"
            : dataDe.status === "OVER_QUERY_LIMIT"
              ? "OVER_QUERY_LIMIT – API-Limit oder Billing prüfen"
              : dataDe.error_message
                ? `${dataDe.status}: ${dataDe.error_message}`
                : (dataDe.status as string) || "Unbekannter Fehler";

      return { error: errorMessage, reviews: [] };
    }

    const resultDe = dataDe.result as {
      name?: string;
      rating?: number;
      reviews?: GoogleReview[];
      user_ratings_total?: number;
    };

    const reviewsDe = resultDe.reviews ?? [];
    const userRatingsTotal = resultDe.user_ratings_total ?? 0;

    let result = resultDe;
    let usedFallback = false;

    if (reviewsDe.length < userRatingsTotal && userRatingsTotal >= 2) {
      const dataAll = await fetchPlaceDetails(apiKey, placeId, "none");
      if (dataAll.status === "OK" && dataAll.result) {
        const reviewsAll =
          (dataAll.result as { reviews?: GoogleReview[] }).reviews ?? [];
        if (reviewsAll.length > reviewsDe.length) {
          result = dataAll.result as typeof result;
          usedFallback = true;
        }
      }
    }

    let reviews = (result.reviews || []).slice(0, MAX_REVIEWS);
    let translatedToDe = false;
    const translateApiKey =
      process.env.GOOGLE_TRANSLATE_API_KEY || apiKey;

    if (reviews.length > 0 && translateApiKey) {
      const textsToTranslate: string[] = [];
      const indicesWithText: number[] = [];
      reviews.forEach((r, i) => {
        if (r.text?.trim()) {
          textsToTranslate.push(r.text.trim());
          indicesWithText.push(i);
        }
      });

      if (textsToTranslate.length > 0) {
        const translated = await translateTexts(textsToTranslate, translateApiKey);
        if (translated) {
          const nextReviews = [...reviews];
          indicesWithText.forEach((idx, i) => {
            nextReviews[idx] = { ...nextReviews[idx], text: translated[i] };
          });
          reviews = nextReviews;
          translatedToDe = true;
        }
      }

      const timeStrings = reviews.map(
        (r) => r.relative_time_description || ".",
      );
      const hasNonDeTime = timeStrings.some(
        (t) =>
          t !== "." &&
          !/^(vor|vor einer|vor \d+|vor über|vor etwa|vor mehr als|heute|gestern|gerade eben)/i.test(
            t,
          ),
      );

      if (hasNonDeTime) {
        const translatedTimes = await translateTexts(timeStrings, translateApiKey);
        if (translatedTimes) {
          reviews = reviews.map((r, i) => ({
            ...r,
            relative_time_description: translatedTimes[i],
          }));
        }
      }
    }

    return {
      reviews,
      placeName: result.name || "",
      rating: result.rating ?? null,
      userRatingsTotal: result.user_ratings_total ?? null,
      usedFallback,
      translatedToDe,
    };
  } catch (e) {
    console.error("Google Reviews API Error:", e);
    return {
      error: "Fehler beim Laden der Bewertungen",
      reviews: [],
    };
  }
}
