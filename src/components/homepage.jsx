import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from './styles';

function Homepage() {
  return (
    <div>
      <div className='flex justify-between mb-[3rem]'>
        <h1>Prince || Software Developer</h1>
        <ul className='flex flex-row gap-20'>
          <a>Home</a>
          <a>Projects</a>
          <a>Contact</a>
        </ul>
      </div>

      <div className='flex'>
        {/* Left side div with circles */}
        <div className='flex flex-col'>
          <div className='w-2 h-[30rem] rounded-full bg-[#EA501A]' />
          <div className='w-[3rem]' />
        </div>

        {/* Right side div with intro text */}
        <div className='intro-text font-bold text-black text-left text-[80px] leading-[98px] min-h-[80vh]'>
          <h1 className='mt-[5rem]'>
            Hi, I'm <span className='text-[#EA501A]'>&nbsp; Prince Hope</span>
          </h1>
          <p className='mt-2 text-4xl'>I develop full modern web applications using different technologies</p>
        </div>
      </div>

      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary ml-[40rem] p-2'>
        <AnimatePresence>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-3 h-3 rounded-full bg-black mb-1'
          />
        </AnimatePresence>
      </div>

      <p className='w-full text-center font-bold text-4xl my-8 m-10'>About Me:</p>

      <div className='flex'>
      <img className='w-[30.5em] h-[20.5rem] mr-[5rem]' src='WhatsApp Image 2023-12-08 at 13.33.48.jpeg' alt='Me in front of a computer' />
      <div className='text-left'>
        <p className='align-middle font-semibold m-[5px]'>🚀 Hey there, I'm Prince Hope, a certified software engineer with a passion for turning innovative ideas into efficient solutions. Adept at full-stack web development, problem-solving and collaborating with cross-functional teams to deliver high-quality software products.</p>
        <p className='align-middle font-semibold m-[5px]'>💻 My playground includes proficiency in JavaScript, Python, and a toolkit featuring React, HTML5, TailwindCSS, Bootstrap, NodeJS, ExpressJS, Flask, MySQL, SQLAlchemy, PostgreSQL, Postman, Git, and Github.</p>
        <p className='align-middle font-semibold m-[5px]'>🛠️ Crafting dynamic and interactive user interfaces is my forte, and I'm all about embracing agile methodologies for a streamlined and iterative software development journey. I'm not just a coder; I'm a problem solver!</p>
        <p className='align-middle font-semibold m-[5px]'>🌐 Beyond the screen, I actively contribute to the developer community, fostering collaborative efforts with other developers and sharing insights on different matters. Let's build the future together!</p>
        <p className='align-middle font-semibold m-[5px]'>♟️ When I'm not immersed in code, you'll find me making strategic moves on the chessboard. An intermediate chess player on weekends, always up for a friendly game!</p>
      </div>
    </div>

    </div>
  );
}

export default Homepage;
