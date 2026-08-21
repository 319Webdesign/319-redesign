import {
  ServiceRoutePage,
  serviceMetadata,
} from "@/components/services/ServiceRoutePage";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("webdesign-darmstadt");

export default function WebdesignDarmstadtPage() {
  return <ServiceRoutePage slug="webdesign-darmstadt" />;
}
