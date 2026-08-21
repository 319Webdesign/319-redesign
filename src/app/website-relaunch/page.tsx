import {
  ServiceRoutePage,
  serviceMetadata,
} from "@/components/services/ServiceRoutePage";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("website-relaunch");

export default function WebsiteRelaunchPage() {
  return <ServiceRoutePage slug="website-relaunch" />;
}
