import { pageMetadata } from "@/data/metadata";

export const metadata = {
  ...pageMetadata(
    "/developers",
    "Developers",
    "PenSphere developer resources and API documentation for integrating pension schedules and remittances. Coming soon.",
  ),
  // Placeholder page: keep it out of search results until there is real content.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
