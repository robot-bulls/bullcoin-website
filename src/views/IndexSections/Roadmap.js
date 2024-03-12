import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import icon from "../../assets/img/favicon.png"

const Roadmap = () => {
 return (
  <div className='roadmap'>
   <h1>Roadmap</h1>

   <VerticalTimeline>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="Feb 2024"
     iconStyle={{
      background: 'darkblue',
      color: '#fff',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     }}
    >
     <p>
      The inception of the token concept was realized, culminating in its official launch alongside the implementation of a robust voting system
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="June 2024"
     iconStyle={{
      background: 'darkblue',
      color: '#fff',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     }}
    >
     <p>
      Integration with the Solana network was seamlessly introduced, enhancing the token's ecosystem
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="October 2024"
     iconStyle={{
      background: 'darkblue',
      color: '#fff',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     }}
    >
     <p>
      A pivotal milestone was achieved with the integration of our trading robots onto the token platform, enriching its functionalities
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="Jan 2025"
     iconStyle={{
      background: 'darkblue',
      color: '#fff',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     }}
    >
     <p>
      Coming up with the introduction of a voting mechanism for the election of an administrator for the RobotBulls platform marks yet will be another significant advancement in our roadmap
     </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

    />
   </VerticalTimeline>

  </div>
 );
};

export default Roadmap;