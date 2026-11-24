'use client'
import { useEffect } from "react";
import ContentBuilder from "../../components/ContentBuilder";
import terms from "../../data/terms";
import { scrollUp } from "../../utils/common";
import { usePathname } from "next/navigation";

const Terms = () => {
  const pathname = usePathname();
  useEffect(() => {
      if (pathname && !window.location.hash) {
          scrollUp();
      }
  }, [pathname]);
  return (
    <ContentBuilder data={terms} />
  );
};

export default Terms;
