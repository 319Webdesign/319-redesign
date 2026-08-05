export type ClientLogo = {
  name: string;
  src: string;
  href?: string;
  /** relative Breite im Logo-Slot (optische Anpassung) */
  widthClass?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "Elektrotechnik Mager",
    src: "/kunden-logo/etm-logo.png",
    href: "https://www.etm-gg.de",
    widthClass: "w-[11rem] sm:w-[13rem]",
  },
  {
    name: "Baudienstleistungen Hofmann",
    src: "/kunden-logo/baudienstleistungen-hofmann.png",
    href: "https://www.baudienstleistungen-hofmann.de/",
    widthClass: "w-[8.5rem] sm:w-[10rem]",
  },
  {
    name: "Tierhotel Rhein-Main",
    src: "/kunden-logo/tierhotel.png",
    href: "https://tierhotel-rhein-main.de",
    widthClass: "w-[10.5rem] sm:w-[12.5rem]",
  },
  {
    name: "1klang Massage",
    src: "/kunden-logo/1klang.png",
    href: "https://1klang-massage.de",
    widthClass: "w-[3.75rem] sm:w-[4.5rem]",
  },
  {
    name: "Immologis",
    src: "/kunden-logo/immologis.png",
    href: "https://www.he-immologis.de",
    widthClass: "w-[11rem] sm:w-[13rem]",
  },
  {
    name: "Heinerfilm",
    src: "/kunden-logo/heinerfilm.png",
    href: "https://www.heinerfilm.de",
    widthClass: "w-[10rem] sm:w-[12rem]",
  },
];
