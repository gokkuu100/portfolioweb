import React from 'react'

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
        <div className='intro-text text-black text-left text-5xl min-h-[100vh]'>
            <h1>Hi, I'm 
            <span className="text-[#EA501A]">
              &nbsp; Prince Hope
            </span></h1>
            <p className='mt-2 text-4xl'>I develop full modern web applications using different technologies</p>
        </div>
        <p className='w-full text-center font-bold text-4xl my-8'>About Me:</p>
        <div className='flex'>
            <img className='w-[15.5em] h-[15.5rem]' src="WhatsApp Image 2023-12-08 at 13.33.48.jpeg" alt="Me in front of a computer"/>
            <div className='ml-[2.5rem] text-left'>
            <p>
                A software developer with experience in web development and mobile application development. Skilled in languages such as JavaScript, TypeScript, Python, Java, C
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet at voluptatibus eaque, quia dolores, provident inventore maiores beatae enim fuga consectetur sapiente nemo earum eligendi dolor molestiae exercitationem vel?</p>
            </div>
        </div>
        <p className='w-full text-center font-bold text-4xl my-8'>Projects</p>
    </div>
  )
}

export default Homepage;