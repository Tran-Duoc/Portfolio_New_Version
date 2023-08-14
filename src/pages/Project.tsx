import projects from '../data/project.json';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import React from 'react';

interface DataType {
  name: string;
  image: string;
  link: string;
  technical: string[];
}

const Project = () => {
  return (
    <section className='min-h-screen bg-wite  dark:bg-slate-800 dark:text-white text-black'>
      <h2 className='text-3xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center px-5  py-10 md:py-20'>
        My Projects
      </h2>
      <div className=' dark:bg-slate-950/30 bg-slate-100 py-10 px-5 md:px-0'>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='min-h-[50vh] view flex '
        >
          {projects.skill.map((item: DataType, index: number) => {
            return (
              <React.Fragment key={index}>
                <SwiperSlide className='mt-10'>
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-10'>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='bg-cover object-cover w-full md:h-96 h-60'
                      />
                    </div>
                    <div className='flex flex-col md:col-span-2 justify-center gap-2'>
                      <h2 className='text-2xl md:text-4xl font-semibold underline text-red-600'>
                        {item.name}
                      </h2>
                      <span className='flex gap-5 flex-wrap my-5'>
                        {item.technical.map((nameTech, index: number) => {
                          return (
                            <p
                              className='text-lg font-semibold bg-green-500  px-5 py-1 rounded-2xl text-slate-900'
                              key={index}
                            >
                              {nameTech}
                            </p>
                          );
                        })}
                      </span>
                      <div className=''>
                        <Link
                          to={item.link}
                          target='_blank'
                          className='bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-600/70 duration-300'
                        >
                          Open view source
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </React.Fragment>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
