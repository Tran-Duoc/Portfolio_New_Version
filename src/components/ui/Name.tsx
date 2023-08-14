import Title from '../common/Title/Title';
import { motion } from 'framer-motion';

const Name = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-4xl font-extrabold dark:text-slate-100 sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-slate-800'
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Title className='text-hover'>H</Title>
        <Title className='text-hover'>i</Title>
        <Title className='text-hover'>,</Title>
      </motion.span>
      <br />
      <Title className='text-hover'>I</Title>
      <Title className='text-hover'>'</Title>
      <Title className='text-hover'>m</Title>{' '}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title className='text-hover text-red-600'>T</Title>
      </motion.span>
      <Title className='text-hover '>r</Title>
      <Title className='text-hover '>a</Title>
      <Title className='text-hover '>n</Title>{' '}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title className='text-hover text-red-500'>Đ</Title>
      </motion.span>
      <Title className='text-hover'>u</Title>
      <Title className='text-hover'>o</Title>
      <Title className='text-hover'>c</Title>
    </motion.h2>
  );
};

export default Name;
