'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'


import Logo from '../../../../components/Logo';
import { icons } from "../../../../assets";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button";

const Nav = () => {
    const [scrollY, setScrollY] = useState(0);
    // const [isAuthLocation] = useIsAuthLocation();
    const [showNav, setShowNav] = useState(false);
    const pathname = usePathname()
    const navigate = useRouter();
    // const hide = useHideOldComponents();

    const handleSetScroll = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSetScroll);
        return () => window.removeEventListener('scroll', handleSetScroll);
    }, []);


    const isActiveRoute = (route: string) => {
        return pathname === route
    }

    return (
        <div
            className="flex w-screen px-[4%] sm:px-[6%] justify-between items-center h-fit fixed top-0 left-0 z-40 transition-all bg-[#ffffffe6]"
        // style={{
        //     background: scrollY === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.9)'
        // }}
        >
            <div className="flex flex-row flex-wrap min-h-[80px] h-fit justify-start py-0 items-center w-full xl:w-5/12">
                <div className={`w-full flex flex-row justify-between items-center text-black`}>
                    <Link href='/'><Logo /></Link>
                    <button className="w-fit mr-2 xl:hidden" onClick={() => setShowNav(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                            <path d="M0 20H30V16.6667H0V20ZM0 11.6667H30V8.33333H0V11.6667ZM0 0V3.33333H30V0H0Z" fill={'#222222'} />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <ul className={`hidden xl:flex justify-between flex-row h-[50px]`} >
                    <li className={`flex flex-col justify-center text-[18px] mx-6 cursor-pointer font-Onest
                        ${isActiveRoute('/') ? 'text-[#0898A0]' : "text-black"}
                        `}>
                        <Link
                            href={`/`}
                        >
                            Home
                        </Link>
                        {isActiveRoute(`/`) && <ActiveLinkMarker />}
                    </li>
                    <li className={`flex flex-col justify-center text-[18px] mx-6 cursor-pointer font-Onest
                        ${isActiveRoute('/contact') ? 'text-[#0898A0]' : "text-black"}
                        `}>
                        <Link
                            href={`/contact`}
                        >
                            Contact
                        </Link>
                        {isActiveRoute(`/contact`) && <ActiveLinkMarker />}
                    </li>
                    <li className={`flex flex-col justify-center text-[18px] mx-6 cursor-pointer font-Onest
                        ${isActiveRoute('/how-it-works') ? 'text-[#0898A0]' : "text-black"}
                        `}>
                        <Link
                            href={`/how-it-works`}
                        >
                            How it works
                        </Link>
                        {isActiveRoute(`/how-it-works`) && <ActiveLinkMarker />}
                    </li>
                </ul>
                <div className="hidden xl:flex justify-between flex-row gap-1">
                    <a
                        className={`w-36 font-Onest text-[18px]text-black`}
                        href="https://pensphere.ng/login"
                    >
                        <Button label="Login" type={"flat"} />
                    </a>
                    <a className="w-36 h-10 rounded font-normal font-Onest" href="https://pensphere.ng/register">
                        <Button label="Get Started" type={"contained"} />
                    </a>
                </div>
            </div>
            {
                showNav && (
                    <div className="w-screen h-screen bg-zinc-700 fixed top-0 left-0 z-50">
                        <div className="h-screen max-w-[300px] w-10/12 bg-white absolute right-0 top-0">
                            <button className="absolute w-fit right-5 top-5" onClick={() => setShowNav(false)}>
                                <img src={icons.close} alt="" />
                            </button>
                            <div className="w-full h-full flex flex-col justify-between p-4 pb-6">
                                <div className='h-fit flex flex-col justify-start items-start'>
                                    <Logo />
                                    <ul className="flex justify-center flex-col flex-1 h-[60vh]">
                                        <li
                                            onClick={() => setShowNav(false)}
                                            className={`flex flex-col justify-center items-start text-[18px] my-4 cursor-pointer font-Onest ${isActiveRoute('/') ? 'text-[#0898A0]' : 'text-az-black-900'}`}>
                                            <Link
                                                href={`/`}
                                            >
                                                Home
                                            </Link>
                                            {isActiveRoute(`/`) && <div className='w-4/12'><ActiveLinkMarker /></div>}
                                        </li>
                                        <li
                                            onClick={() => setShowNav(false)}
                                            className={`flex flex-col justify-center items-start text-[18px] my-4 cursor-pointer font-Onest ${isActiveRoute('/contact') ? 'text-[#0898A0]' : 'text-az-black-900'}`}>
                                            <Link
                                                href={`/contact`}
                                            >
                                                Contact
                                            </Link>
                                            {isActiveRoute(`/contact`) && <div className='w-4/12'><ActiveLinkMarker /></div>}
                                        </li>
                                        <li
                                            onClick={() => setShowNav(false)}
                                            className={`flex flex-col justify-center items-start text-[18px] my-4 cursor-pointer font-Onest ${isActiveRoute('/how-it-works') ? 'text-[#0898A0]' : 'text-az-black-900'}`}>
                                            <Link
                                                href={`/how-it-works`}
                                            >
                                                How it works
                                            </Link>
                                            {isActiveRoute(`/how-it-works`) && <div className='w-4/12'><ActiveLinkMarker /></div>}
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-between flex-row">
                                    <a className="bg-[#0898A0] text-white w-36 h-10 rounded font-normal font-Onest" href="https://pensphere.ng/login">
                                        <Button label="Login" type={"contained"} />
                                    </a>
                                    <a className="bg-[#0898A0] text-white w-36 h-10 rounded font-normal font-Onest" href="https://pensphere.ng/register">
                                        <Button label="Get Started" type={"contained"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Nav;

const ActiveLinkMarker = () => {
    return (
        <div className='w-full flex flex-row justify-center items-center'>
            <div className='rounded-full h-1 bg-[#0898A0] w-6/12' />
        </div>
    )
}
