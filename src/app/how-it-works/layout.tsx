import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/how-it-works",
  "How It Works",
  "Step-by-step videos and a user manual showing employers how to register, upload pension schedules, validate PINs and remit contributions on PenSphere.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
