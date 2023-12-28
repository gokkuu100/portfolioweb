import React from 'react';
import Timeline from './timeline';

function Projects() {
 // projects.jsx
const events = [
    {
      date: '2023-01-01',
      title: 'Event 1',
      description: 'Description for event 1.',
      imageSrc: 'WhatsApp Image 2023-12-08 at 13.33.48.jpeg',
    },
    {
      date: '2023-02-15',
      title: 'Event 2',
      description: 'Description for event 2.',
      imageSrc: 'Another_Image.jpg',
    },
  ];
  

  return (
    <div>
      <div className='w-[15rem] min-h-[18rem] border-4 border-black rounded flex flex-col'>
        <img
          src='WhatsApp Image 2023-12-08 at 13.33.48.jpeg'
          alt=''
          className='w-[15rem] h-[12rem] rounded'
        />
        <div className='flex-1 flex flex-col justify-center items-center text-center'>
          <h3 className='text-xl font-semibold'>This is a card</h3>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus modi explicabo amet voluptatibus aperiam necessitatibus, quaerat, iusto voluptatem, 
          tenetur nam hic et vero ipsa itaque animi numquam incidunt. Magni.</p>
        </div>
      </div>
      <p className='w-full text-center font-bold text-4xl my-8'>Projects:</p>
      <Timeline events={events} />
    </div>
  );
}

export default Projects;
