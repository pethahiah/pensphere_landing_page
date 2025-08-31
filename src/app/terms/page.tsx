'use client'
import { useEffect } from "react";
import ContentBuilder from "../../components/ContentBuilder";
import terms from "../../data/terms";
import { scrollUp } from "../../utils/common";
import { useLocation } from "react-router-dom";

const Terms = () => {
  const {pathname, hash} = useLocation();
  useEffect(() => {
      if (pathname && !hash) {
          scrollUp();
      }
  }, [hash, pathname]);
  return (
    <ContentBuilder data={terms} />
  );
};

export default Terms;
