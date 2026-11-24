'use client'
import { useEffect } from "react";
import { scrollUp } from "../../utils/common";

const FAQs = () => {
  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center w-1/2 my-8 mx-auto">
        <div className="h-[80vh] m-auto flex flex-col justify-center">
          <h2 className="mb-4">Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
