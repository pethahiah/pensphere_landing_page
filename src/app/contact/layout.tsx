import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/contact",
  "Contact Us",
  "Contact the PenSphere team by email, phone or WhatsApp, or visit our office at All Seasons Plaza, Agidingbi, Ikeja, Lagos.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
