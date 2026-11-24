'use client'
import { useEffect, useState } from "react";
import { scrollUp } from "../../utils/common";
import Button from "../../components/Button";
import { documents, heroImages, icons } from "../../assets";
import { usePathname, useRouter } from 'next/navigation';


const guides = [
  {
    title: "How To Create An Account And Get Started.",
    videoLink: "https://www.youtube.com/embed/QOj88LzgORU?si=PR7D4e-BEYmocY7y"
  },
  {
    title: "How To Login And Reset Your Password.",
    videoLink: "https://www.youtube.com/embed/leGJalHN0P0?si=j_qEOtpyRa9Sd5NS"
  },
  {
    title: "How to upload a pension remittance schedule.",
    videoLink: "https://www.youtube.com/embed/qyV0vKrI2B8?si=vBESDksWaiJjS7H9"
  },
  {
    title: "How to use the schedule validator tool.",
    videoLink: "https://www.youtube.com/embed/f9sFxt37bZk?si=Bmf_KmgDw6qfFR5r"
  },
  {
    title: "How to pay for a pension remittance using the 'Bank Transfer' payment method.",
    videoLink: "https://www.youtube.com/embed/vsQbyCuJo5w?si=x7sK-QEaR6o5Y53g"
  },
  {
    title: "How to make a pension remittance using the 'Cheque Deposit' payment method.",
    videoLink: "https://www.youtube.com/embed/8bEJAtfiJuk?si=uchsuo1MnHsEHbpN"
  },
  {
    title: "How to configure application settings.",
    videoLink: "https://www.youtube.com/embed/XGLTRJfExXA?si=D66JzR8roWVfkou9"
  },
  {
    title: "How to manage PFC dashboard.",
    videoLink: "https://www.youtube.com/embed/L9gnemKSJrw?si=SyQV8pJ6YMhD9ife"
  },
]
const HowItWorks = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  const normalHash = hash.replace(/%20/g, ' ');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    if (pathname && !window.location.hash) {
      scrollUp();
    }
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  return (
    <div className="w-full mb-40">
      <div className='relative h-fit w-full'>
        <img src={heroImages.HowItWorksLg} loading="lazy" alt="" className='w-full hidden lg:flex' />
        <img src={heroImages.HowItWorksSm} loading="lazy" alt="" className='w-full lg:hidden flex' />
        <h1 className='absolute lg:top-[50%] top-[10%] text-white text-3xl lg:text-[40px] lg:leading-[51px] font-medium lg:left-[6%] left-[25%]'>How It Works</h1>
      </div>

      <div className="w-full p-[6%] flex flex-col md:flex-row gap-3  gap-y-20">
        <div className="flex-1 flex flex-col gap-10">
          <div className="px-5 flex flex-col items-start text-start">
            <h2 className="text-black w-full font-bold lg:text-3xl text-[24px] font-Onest rounded-md ">
              Simplify Your PenSphere Journey
            </h2>
            <p className="max-w-[600px] my-10">Watch these quick videos to explore our features step-by-step, and learn how to get the most out of PenSphere.</p>
            <p className="max-w-[600px]">You can also read our user manual.</p>
            <a href={documents.user_manual} target="__blank">
              <Button type="flat" label="Download User Manual" className="!w-fit !my-2 flex items-center" rightIcon={<img src={icons.downloadWhite} className="w-[20px]" />} />
            </a>
          </div>

          <div className="h-fit flex flex-col shadow-md p-5 px-10 rounded-md md:sticky md:top-[100px] bg-white">
            <h4 className="text-black w-full text-start font-bold font-Onest text-[26px] mb-3">Guide</h4>
            <ul className="flex flex-col gap-4 items-start list-disc text-start">
              {
                guides.map((guide) => {
                  return (
                    <li className={`hover:text-teal-500 ease
                      ${normalHash === `#${guide.title}` && "text-teal-500"}
                      `}
                      key={guide.title}
                    >
                      <a href={`#${guide.title}`}>
                        {guide.title}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
        <div className="flex-[1.5] flex flex-col gap-20 md:mt-10">
          {
            guides.map((guide) => {
              return (
                <div key={guide.videoLink} className="flex flex-col gap-5 items-center">
                  <h2 id={guide.title} className="text-[19px] md:text-[22px]   W-fit text-center max-w-[560px]">{guide.title}</h2>
                  <iframe width="90%" height="400" src={guide.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default HowItWorks