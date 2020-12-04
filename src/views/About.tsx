import React from 'react';
import GitStats from '../components/GitStats';

function About() {
    return (
        <>
            <div className='about'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div
                            className='col-12 animate-box fadeInLeft animated information'
                            data-animate-effect='fadeInLeft'
                        >
                            <span className='heading-meta style-1'>
                                ABOUT THIS SITE
                            </span>
                            <GitStats></GitStats>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider1'></div>
        </>
    );
}

export default About;
