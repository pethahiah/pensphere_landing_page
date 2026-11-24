import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/privacy",
  "Privacy Policy",
  "How PenSphere, operated by Pethahiah Rehoboth International Limited, collects, uses and protects employer and employee data.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
