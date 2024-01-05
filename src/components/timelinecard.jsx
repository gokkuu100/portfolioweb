// timelinecard.jsx
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimelineCard({ title, description, imageSrc, tags, projectUrl }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#ffff',
        display: 'flex',
        alignItems: 'center',
      }}
    >
    <a href={projectUrl}>
      <img
        src={imageSrc}
        alt=''
        className='w-[15rem] h-[12rem] rounded'
        style={{ marginRight: '1rem' }}
      />
    </a>
      <div>
        <h3 className='vertical-timeline-element-title'>{title}</h3>
        <p>{description}</p>
        <p>{tags}</p>
      </div>
    </VerticalTimelineElement>
  );
}

export default TimelineCard;
