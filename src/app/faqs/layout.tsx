import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/faqs",
  "Frequently Asked Questions",
  "Answers to common questions about registering, uploading schedules and remitting pension contributions with PenSphere.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
