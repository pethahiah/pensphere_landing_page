'use client'
import { useEffect } from "react";
import ContentBuilder from "../../components/ContentBuilder";
import privacy from "../../data/privacy";
import { scrollUp } from "../../utils/common";
import { useLocation } from "react-router-dom";


const Privacy = () => {
  const {pathname, hash} = useLocation();
  useEffect(() => {
    if (pathname && !hash) {
      scrollUp();
    }
  }, [hash, pathname]);
  return (
    <ContentBuilder data={privacy} />
  );
};

export default Privacy;
