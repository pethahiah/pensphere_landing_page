'use client'
import { useEffect } from 'react';
import { scrollUp } from '../../utils/common';
import ContactUsForm from './ContactUsForm';
import { heroImages } from '../../assets';
import { usePathname } from 'next/navigation';

const ContactUs = () => {
  const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            scrollUp();
        }
    }, [pathname]);
    
    return (
        <div className='w-full'>
            <div className='relative h-fit w-full'>
                <img src={heroImages.contactLg} alt="" className='w-full hidden lg:flex' />
                <img src={heroImages.contactSm} alt="" className='w-full lg:hidden flex' />
                <h1 className='absolute lg:top-[50%] top-[10%] text-white text-3xl lg:text-[40px] lg:leading-[51px] font-medium lg:left-[6%] left-[25%]'>Contact us</h1>
            </div>
            <div>
                <div></div>
                <div>
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
};

export default ContactUs;
