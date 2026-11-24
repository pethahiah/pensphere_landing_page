import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata(
  "/terms",
  "Terms and Conditions",
  "The terms and conditions for using PenSphere, the PenCom-approved pension remittance platform for Nigerian employers.",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
