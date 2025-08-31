'use client'
import { useRouter } from 'next/navigation';
import { heroImages, icons } from '../../../../assets';
import Button from '@/components/Button';
// import './hero.scss';

const heroimgs = [
    heroImages.home1,
    heroImages.home2,
    heroImages.home3,
    heroImages.home4,
]

const Hero = () => {
    const navigate = useRouter();
    
    return (
        <div className="w-screen bg-[#0898A008] min-h-screen pt-20 h-fit " id='hero'>
            <div className="h-full flex px-[6%] items-center justify-center  mb-10 sm:mb-16 sm:my-16">
                <div className="w-full sm:w-[80%] h-fit flex flex-col items-center ">
                    <div className="flex flex-row h-9 my-4 bg-[#0898A01A] rounded-full w-fit p-2 items-center text-xs">
                        <p className="bg-[#0898A0] rounded-full h-[100%] flex flex-row justify-center items-center text-white font-medium px-2 py-2">New</p>
                        <p className="px-2 ">Announcing our new brand experience</p>
                    </div>
                    <h1 className="font-Onest text-center text-4xl font-medium w-full leading-[100%]">Revolutionize Pension Payments.</h1>
                    <h2 className="font-Onest text-center text-xl w-full md:w-[70%] mt-4">
                        Simplify Pension schedules and remittances.  PenSphere empowers employers with secure, schedules for effortless and accurate remittances.
                    </h2>
                    <h2 className="font-Onest text-center text-xl w-full md:w-[70%] my-4">
                        Simultaneously shared with  Pension Fund Administrators (PFAs) and Custodians (PFCs), managing schedules is now seamless—from the comfort of your office.
                    </h2>
                    <div className="flex flex-row justify-center items-end">
                        <a className="w-36 h-fit rounded font-normal font-Onest" href="https://pensphere.ng/register">
                            <Button label="Get Started" type={"flat"} />
                        </a>
                        <img src={icons.coilArrow} alt="" className="mx-10 mb-10" />
                    </div>
                    <div>
                        <p className=" font-Onest text-center text-base mt-5 mb-6">Trusted by 100+ beautiful organisations</p>
                    </div>
                </div>
            </div>

            <div className="flex md:hidden flex-row justify-center items-center w-full pb-10">
                <img src={heroImages.home1} alt="" className='relative w-[80%] h-auto object-cover object-top shadow-md rounded-md' />
            </div>

            <div className="hidden md:block  pb-10">
                <div className="flex flex-row flex-no-wrap overflow-hidden justify-center items-center">
                    {
                        heroimgs && heroimgs?.map((heroimg, index) => <img src={heroimg} alt='' key={index} loading="lazy" className="m-[30px] w-[365px] h-[400px] object-cover object-top rounded-md shadow-md" />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Hero;
