import {
  ServiceRoutePage,
  serviceMetadata,
} from "@/components/services/ServiceRoutePage";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("homepage-handwerker");

export default function WebdesignHandwerkerPage() {
  return <ServiceRoutePage slug="homepage-handwerker" />;
}
