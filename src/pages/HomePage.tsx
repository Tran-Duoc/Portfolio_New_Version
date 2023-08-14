import { Name, TsPraticle } from '../components/ui';
import BoxText from '../components/common/BoxText/BoxText';
import LinkRouter from '../components/common/Link/LinkRouter';
import { path } from '../constants/path.constant';
import ReactIcon from '../components/common/icons/React/ReactIcon';
import { motion } from 'framer-motion';

const LeftSide = () => {
  return (
    <>
      <Name />
      <motion.h3
        initial={{ opacity: 0, scale: 0, x: -600 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='text-lg md:text-xl font-medium dark:text-slate-50 text-slate-800 mt-10'
      >
        Programming{' '}
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <BoxText className='boxText boxTextBlue boxTextActive'>
            Front End
          </BoxText>
        </motion.button>
        {'/'}
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <BoxText className='boxText boxTextPink boxTextActive'>
            Back End
          </BoxText>
        </motion.button>
      </motion.h3>

      <div className='mt-5 pb-20'>
        <div className='flex flex-col md:flex-row gap-3 '>
          <motion.span
            initial={{ opacity: 0, scale: 0, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='mt-10 block w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 text-center text-sm font-medium md:text-base text-white  hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300  sm:mr-5 sm:inline-block sm:w-auto'
          >
            <LinkRouter to={path.face}>Kết bạn với mình</LinkRouter>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='mt-4 block w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:mt-10 sm:inline-block sm:w-auto'
          >
            <LinkRouter to={path.face}>CV của mình</LinkRouter>
          </motion.span>
        </div>
      </div>
    </>
  );
};
const RightSide = () => {
  return <ReactIcon />;
};

const HomePage = () => {
  return (
    <section className='relative bg-inherit min-h-screen bg-slate-900'>
      <TsPraticle />
      <div className='relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center pt-10 md:pt-0 px-2 md:px-5 lg:px-0'>
        <div className='relative w-full mt-20 md:mt-0'>
          <div className='view px-4 md:px-0 '>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12  '>
              <div className='col-span-2 '>
                <LeftSide />
              </div>
              <div className='col-span-1 mt-10 md:mt-0 overflow-hidden p-[1px]  '>
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
