'use client'
import { useEffect } from "react";
import ContentBuilder from "../../components/ContentBuilder";
import agreement from "../../data/agreement";
import otherTerms from "../../data/otherTerms";
import { scrollUp } from "../../utils/common";


const UserAgreement = () => {
  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <div className="mt-20">
      <ContentBuilder data={agreement} />
      <ContentBuilder data={otherTerms} />
    </div>
  );
};

export default UserAgreement;
