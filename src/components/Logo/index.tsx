import { logo } from '../../assets';

const Logo = () => {
    return (
        <img src={logo.black} alt="" className='h-16 w-[300px] object-contain' />
    )
};

export default Logo;

export const WhiteLogo = () => {
    return (
        <img src={logo.white} alt="" className='h-16 w-[300px] object-cover ml-[-30px] mb-5' />
    )
};
