'use client'
import { useEffect } from "react";
import ContentBuilder from "../../components/ContentBuilder";
import privacy from "../../data/privacy";
import { scrollUp } from "../../utils/common";
import { usePathname } from "next/navigation";


const Privacy = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname && !window.location.hash) {
      scrollUp();
    }
  }, [pathname]);
  return (
    <ContentBuilder data={privacy} />
  );
};

export default Privacy;
