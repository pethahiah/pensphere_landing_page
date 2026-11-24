import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/useragreement",
  "User Agreement",
  "The PenSphere user agreement for employers remitting pension contributions through the platform.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
