// timeline.jsx
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineCard from './timelinecard';
import './timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <VerticalTimeline>
        {events.map((event, index) => (
          <TimelineCard key={index} {...event} imageSrc={event.imageSrc} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
