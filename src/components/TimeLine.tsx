import React from 'react';
import type { TimeLineItem } from '../types/dataTypes';

type TimeLineProps = {
    timeLine: TimeLineItem[];
};

const TimeLine = ({ timeLine }: TimeLineProps): JSX.Element => {
    return (
        <div className='timeline timeline-second-style clearfix'>
            {timeLine.map((item) => (
                <div className='timeline-item clearfix' key={item.year}>
                    <div className='left-part'>
                        <h5 className='item-period'>{item.year}</h5>
                        <span className='item-company'>{item.location}</span>
                    </div>
                    <div className='divider'></div>
                    <div className='right-part'>
                        <h4 className='item-title'>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimeLine;
