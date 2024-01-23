import React from 'react';
import Timeline from './timeline';

function Projects() {

  const events = [
    {
      title: 'SkillCode',
      description: 'This is a software platform much like hackerrank, which assess technical skills of students. It automates the in-person techincal interview.',
      imageSrc: '/skillcode.png',
      tags: "#python || #restapi",
      projectUrl: "https://github.com/Chisaina69/Skill-Code"
    },
    {
      title: 'Converse-Wall',
      description: 'This is a web chat application that allows a list of users to communicate and send messages and images to each other.',
      imageSrc: '/conversewall.png',
      tags: "#socketio || #nodejs || #expressjs",
      projectUrl: "https://github.com/gokkuu100/Converse-Wall-Front"
    },
    {                              
      title: 'Kwetu-Listings',
      description: 'Kwetu is a project that simplfies the house hunting complexities by listing a number of available houses for sale made available by the house agents. .',
      imageSrc: '/kwetu.png',
      tags: "#jwt || #tailwindcss ",
      projectUrl: "https://emmanuelmeena91.github.io/estate-client/"
    },
    {
      title: 'Event-Booking',
      description: 'This is a python based command-line application that allows users to create and book different events.',
      imageSrc: '/event.png',
      tags: "#cmd || #python",
      projectUrl: "https://github.com/gokkuu100/event-booking-system",
    },
    {
      title: 'Bizi-App',
      description: 'Bizi is a web application that helps keep track of store records.',
      imageSrc: '/bizi.png',
      tags: "#react || #firebase",
      projectUrl: "https://64cbaed2c87107014dcee11b--majestic-zabaione-697268.netlify.app/",
    },
  ];
  

  return (
    <div>
      <p className='w-full text-center font-bold text-4xl my-8'>Projects</p>
      <Timeline events={events} />
    </div>
  );
}

export default Projects;
