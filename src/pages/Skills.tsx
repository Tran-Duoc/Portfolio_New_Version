import data from '../data/data.json';
import Image from '../components/common/Image/Image';

interface DataType {
  name: string;
  image: string;
  width: number;
  height: number;
}

const Skills = () => {
  return (
    <section className='dark:bg-slate-900 bg-white min-h-screen flex items-center justify-center dark:text-white  text-slate-800'>
      <div className='flex flex-col gap-2 max-w-8xl  w-full py-20'>
        <div>
          <h2 className='text-3xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center px-5'>
            This is some technical skill
          </h2>
        </div>

        <div className='flex flex-wrap gap-20 mt-10 md:mt-32 items-center justify-center'>
          {data.map((item: DataType) => {
            return (
              <Image
                imageSrc={item.image}
                desc={item.name}
                width={item.width}
                height={item.height}
                loading='lazy'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
