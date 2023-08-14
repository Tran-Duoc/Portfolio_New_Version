import BoxText from '../components/common/BoxText/BoxText';
import Image from '../components/common/Image/Image';
import Title from '../components/common/Title/Title';
import avatar from '/images/tran_duoc.jpg';
import { motion } from 'framer-motion';

const LeftSide = () => {
  return (
    <section className='flex flex-col'>
      <Title className=' text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
        Who am I?
      </Title>

      <p className='mt-10 dark:text-white  text-slate-800 text-base lg:text-xl font-medium  text-justify flex flex-col'>
        <motion.span
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Hi everybody 👋👋,
          <br />
          Currently, I am a senior student at Can Tho University, majoring in
          <BoxText className='boxTextYellow boxTextActive  mx-3'>
            Computer Science.
          </BoxText>
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className='mt-5'
        >
          Currently,
          <br />I am studying the field of Web development. At the moment, I am
          able to program both
          <BoxText className='boxTextBlue boxTextActive mx-3'>
            Front End
          </BoxText>
          and
          <BoxText className='boxTextGreen boxTextActive mx-3'>
            Back end
          </BoxText>
          using the
          <BoxText className='boxTextYellow  boxTextActive mx-3'>
            JavaScript
          </BoxText>
          language.
        </motion.span>
      </p>
    </section>
  );
};
const RightSide = () => {
  return (
    <Image
      imageSrc={avatar}
      desc='Tran Minh Duoc'
      width='960'
      height='1280'
      decoding='async'
      data-nimg='1'
      className='h-auto w-full rounded-2xl shadow-md shadow-slate-700'
      loading='lazy'
    />
  );
};

const AboutPage = () => {
  return (
    <>
      <div className='relative flex min-h-screen flex-col items-center justify-center pt-10 md:pt-0 px-2 md:px-5 lg:px-0 dark:bg-slate-800 bg-white'>
        <div className='relative w-full'>
          <div className='view px-4 md:px-0'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3  '>
              <div className='col-span-2'>
                <LeftSide />
              </div>
              <div className='col-span-2 md:col-span-1  p-10  md:p-0 lg:p-14'>
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
