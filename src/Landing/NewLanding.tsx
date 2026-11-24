'use client'
import { lazy, Suspense } from "react";
import { scrollUp } from "../utils/common";
import Hero from "./Components/Personal/Hero";
import PageLoader from "../components/PageLoader";

// Lazy load components
const PFAList = lazy(() => import("./Components/Personal/PFAList"));
const HowItWorksStrip = lazy(() => import("./Components/Personal/HowItWorksStrip"));
const CallToAction = lazy(() => import("./Components/Personal/CallToAction"));
const FAQ = lazy(() => import("./Components/Personal/FAQ"));

const NewLanding = () => {

    return (
        <div className="w-screen h-fit font-Onest">
            <Hero />
            <Suspense fallback={<PageLoader />}>
                <PFAList />
            </Suspense>
            <Suspense fallback={<PageLoader />}>
                <HowItWorksStrip />
            </Suspense>
            <Suspense fallback={<PageLoader />}>
                <FAQ />
            </Suspense>
            <Suspense fallback={<PageLoader />}>
                <CallToAction />
            </Suspense>
        </div>
    );
};

export default NewLanding;
