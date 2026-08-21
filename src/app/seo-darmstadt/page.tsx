import {
  ServiceRoutePage,
  serviceMetadata,
} from "@/components/services/ServiceRoutePage";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("seo-darmstadt");

export default function SeoDarmstadtPage() {
  return <ServiceRoutePage slug="seo-darmstadt" />;
}
