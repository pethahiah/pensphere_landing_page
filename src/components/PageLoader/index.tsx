
import { icons } from '../../assets';
// import './pageloader.scss';

const PageLoader = () => {
  return (
    <div className="page-loader w-full h-[100vh] flex justify-center items-center">
      <img src={icons.loader} alt="Loading..." className='w-full h-full object-contain' />
    </div>
  )
};

export default PageLoader;
