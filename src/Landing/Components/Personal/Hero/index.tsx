import Link from 'next/link';
import { heroImages, icons } from '../../../../assets';
import ImageCarousel from './ImageCarousel';
import { site } from '@/data/site';

const heroimgs = [
    heroImages.home1,
    heroImages.home2,
    heroImages.home3,
    heroImages.home4,
]

const Hero = () => {
    return (
        <div className="w-screen bg-[#0898A008] min-h-screen pt-20 h-fit" id='hero'>
            <div className="h-full flex px-[6%] items-center justify-center mb-10 sm:mb-16 sm:my-16">
                <div className="w-full sm:w-[80%] h-fit flex flex-col items-center">
                    <a
                        href={site.pencomPsspList}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="See PenSphere on PenCom's list of approved Payment Solution Service Providers"
                        className="flex flex-row h-auto min-h-9 my-4 bg-[#0898A01A] hover:bg-[#0898A033] transition-colors rounded-full w-fit max-w-full p-2 items-center text-xs font-Onest"
                    >
                        <svg className="mx-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#0898A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="px-1 text-az-teal font-medium text-left">
                            <span className="sm:hidden">Approved by PenCom</span>
                            <span className="hidden sm:inline">Approved by the National Pension Commission (PenCom)</span>
                        </p>
                    </a>
                    <h1 className="font-Onest text-center text-4xl md:text-5xl font-medium w-full leading-tight">Revolutionize Pension Payments.</h1>
                    <p className="font-Onest text-center text-lg text-gray-600 w-full md:w-[70%] mt-4 leading-relaxed">
                        Simplify pension schedules and remittances. PenSphere empowers employers with secure, accurate remittances —
                        shared simultaneously with Pension Fund Administrators (PFAs) and Custodians (PFCs), all from the comfort of your office.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-8">
                        <a className="bg-az-teal text-white h-12 px-8 rounded-full font-bold font-Onest hover:bg-[#0aa7b0] transition-colors flex items-center" href="https://pensphere.ng/register">Get Started</a>
                        <Link className="border border-az-teal text-az-teal h-12 px-8 rounded-full font-medium font-Onest hover:bg-[#0898A01A] transition-colors flex items-center" href="/how-it-works">See how it works</Link>
                        <img src={icons.coilArrow} alt="" className="hidden lg:block ml-2" />
                    </div>
                    <div>
                        <p className="font-Onest text-center text-base mt-6 mb-6">Trusted by 100+ organisations across Nigeria</p>
                    </div>
                </div>
            </div>

            <div className="pb-10">
                <ImageCarousel images={heroimgs} />
            </div>
        </div>
    );
};

export default Hero;
