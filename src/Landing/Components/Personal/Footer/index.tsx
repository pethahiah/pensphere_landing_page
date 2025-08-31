'use client'
import { WhiteLogo } from '../../../../components/Logo';
// import './footer.scss';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { FormEvent, useState } from 'react';
import { trackAction } from '../../../../utils/tracker';
import { Link } from 'react-router-dom';
import { documents, icons } from '../../../../assets';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/components/Button';

const socials = [
  {
    icon: icons.facebook,
    link: '',
    name: 'facebook',
  },
  {
    icon: icons.linked,
    link: '',
    name: 'linkedIn',
  },
  {
    icon: icons.instagram,
    link: '',
    name: 'instagram',
  },
  {
    icon: icons.twitter,
    link: '',
    name: 'twitter',
  }
]

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const pathname = usePathname()
  const navigate = useRouter().push;
  const path = pathname === '/business_app' ? `${pathname}/` : pathname !== '/' ? '/' : '';

  const saveSub = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // submitInquiry({
    //   first_name: 'Subscription',
    //   last_name: 'Subscription',
    //   issue: 'Subscription',
    //   phone_number: 'Subscription',
    //   email,
    // }, () => {
    //   setLoading(false);
    //   setEmail('');
    // }, setLoading, 'Subscription')
  };

  return (
    <div className="new-footer h-fit bg-[#042527] px-[6%] py-[6%]">
      {
        pathname.includes('business_app') && (
          <div className='flex flex-col justify-center items-center w-full border-b border-[#FFFFFF1A] mb-[100px] pb-[100px]'>
            <h1 className='text-white font-medium text-[40px] w-10/12 max-w-[620px] text-center'>Open your Azatme account now. It’s fast and easy.</h1>
            <a className="bg-[#0898A0] text-white w-36 h-10 rounded font-normal font-Onest" href="https://pensphere.ng/register">
                <Button label="Create an account - It’s free" type={"contained"} />
            </a>
          </div>
        )
      }
      <div className="subscribe section mb-20 flex flex-row justify-between flex-wrap">
        <p className='text-[26px] lg:text-4xl font-medium max-w-[650px] w-full text-white mb-[40px]'>
          Subscribe to our weekly newsletter
          for fun, finance, update and more.
        </p>
        <form className='footer-form w-full lg:w-fit flex flex-col lg:flex-row h-fit' onSubmit={saveSub}>
          <div className='flex flex-row h-[50px] w-full lg:w-fit rounded-md'>
            <div className='h-[50px] w-[50px] flex flex-row justify-center items-center border border-[#FFFFFF4D] px-4 rounded-s-md'>
              <img src={icons.Message} alt="" />
            </div>
            <input
              type="email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              placeholder='Email Address'
              required
              className='w-full lg:w-[30rem] bg-transparent text-white border border-[#FFFFFF4D] px-3 rounded-e-md'
            />
          </div>
          <Button className='!m-0 !h-[50px] !lg:ml-1' btnActionType="submit" label={`${loading ? 'Loading' : 'Subscribe'}`} type={'flat'} />
        </form>
      </div>
      <div className="top !py-10 h-fit">
        <div className="home section">
          <WhiteLogo />
          <p className='text-sm font-normal mb-5 lg:mb-0 w-[290px]'>
            Unlock Efficiency, Accuracy, and Security with Our Cutting-Edge Remittance Platform.
          </p>
        </div>
        <div className="home section">
          <h5 className='text-white text-[16px] font-medium'>Home</h5>
          <ul className='text-[#FFFFFFB2] text-[14px] font-normal space-y-2 mt-4'>
            <li><a href="/#hero">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/#pfas">PFAs</a></li>
            <li><a href="/how-it-works">How it Works</a></li>
          </ul>
        </div>
        <div className="resources section">
          <h5 className='text-white text-[16px] font-medium'>Resources</h5>
          <ul className='text-[#FFFFFFB2] text-[14px] font-normal space-y-2 mt-4'>
            <li><a href={documents.privacy_doc} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="/useragreement">User Agreement</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href={documents.user_manual} target='_blank' rel="noopener noreferrer">User Manual</a></li>
          </ul>
        </div>
        <div className="links section">
          <h5 className='text-white text-[16px] font-medium'>Quick Links</h5>
          <ul className='text-[#FFFFFFB2] text-[14px] font-normal space-y-2 mt-4'>
            <li><a href="https://pensphere.ng/login">Login</a></li>
            <li><a href="https://pensphere.ng/register">Get Started</a></li>
            <li><a href="/developers">Developer</a></li>
            <li><a href="/#faqs">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom h-fit border border-transparent border-t-[#FFFFFF4D] pt-14">
        <div className='brand'>
          <p className='text-base font-normal mb-5 lg:mb-0'>Pethahiah Rehoboth &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="s-media">
          {
            socials.map(({ link, icon, name }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAction(link.split('//')[1], 'Social Media Click')}
              >
                <img src={icon} alt="" />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Footer;
