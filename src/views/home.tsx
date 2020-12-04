import React from 'react';
import type { TimeLineItem } from '../types/dataTypes';
import TimeLine from '../components/TimeLine';

const home = () => {
    const hobies: string[] = [
        'Martial arts novels',
        'All kinds of computer games especially Starcrft 1',
        'Music (Piano, Sining), currently Equip Sony IER-M9 + NW-WM1A (with custom firmware)',
        'Jeff Chang Fan',
        'F1 (Schumacher era)',
        'Learn something new',
    ];
    const geographies: TimeLineItem[] = [
        {
            year: '2017',
            // title: 'Melbourne, Australia',
            desc:
                'Studied in the University of Melbourne, then working in Melbourne',
        },
        {
            year: 2014,
            // title: 'Shanghai, China ',
            desc:
                'Worked in Shanghai, during this period visited some surrounding cities such as Suzhou, Wuxi, Nanjing, Hangzhou, Ningbo, etc.',
        },
        {
            year: 2008,
            // title: 'Wuhan, Hubei, China ',
            desc:
                'Studied in Wuhan, in holidays travelled to Xianning, Changsha and many other places but I have forgotten.',
        },
        {
            year: 'Age 11',
            desc: 'Started to learn Piano',
        },
        {
            year: 'Age 5',
            desc: 'Started to learn calligraphy',
        },
        {
            year: '',
            // title: 'Shiyan, Hubei, China ',
            desc: 'Studied and lived in Shiyan',
        },
    ];

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
                                Informations
                            </span>
                            <h3 className='about-heading'>I&#39;m Fan Li</h3>
                            <p>
                                I&#39;m a full-stack developer and software
                                engineer, with a vast array of knowledge in many
                                different front end and back end languages,
                                responsive frameworks, database and best code
                                practices.
                            </p>
                            <p>
                                Experience working in various web applications
                                such as projects and staff management system,
                                course purchase and management system, online
                                exam system, etc.
                            </p>
                            <div>
                                <p>
                                    <i className='ti-email'></i>
                                    &nbsp;&nbsp;funlee1314@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider1'></div>

            <div className='about'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div
                            className='col-12 animate-box fadeInLeft animated information'
                            data-animate-effect='fadeInLeft'
                        >
                            <span className='heading-meta style-1'>Hobies</span>
                            <h3 className='about-heading'>I Like</h3>
                            <ul className='normal-list-style'>
                                {hobies.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider1'></div>

            <div className='timeline'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <span className='heading-meta style-1'>
                                GEOGRAPHY
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div
                            className='col-md-12 animate-box'
                            data-animate-effect='fadeInLeft'
                        >
                            <TimeLine timeLine={geographies}></TimeLine>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default home;
