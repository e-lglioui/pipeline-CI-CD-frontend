import { Siren } from 'lucide-react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-container flex items-center justify-center bg-[#F5F7F6] h-screen z-40'>
      <div className='loader-icon-container flex items-center justify-center'>
        <Siren className='loader-icon' />
      </div>
    </div>
  );
};

export default Loader;