import React, { useState, useEffect, useRef } from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '../../editable-stuff/config.js';
import sr from '../utils/sr';
import Folder from '../icons/folder';

const StyledProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(24px, 5vw, var(--fz-heading));
    }

    .archive-link {
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        &:after {
            bottom: 0.1em;
        }
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 15px;
        position: relative;
        margin-top: 50px;

        @media (max-width: 1080px) {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
`;

const StyledProject = styled.div`
    cursor: default;
    transition: var(--transition);

    &:hover,
    &:focus {
        outline: 0;
        .project-inner {
            transform: translateY(-5px);
        }
    }

    .project-inner {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }

        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: var(--border-radius);
        background-color: var(--light-navy);
        transition: var(--transition);
    }

    .project-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 35px;

        .folder {
            color: var(--green);
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .project-links {
            display: flex;
            align-items: center;
            margin-right: -10px;
            color: var(--light-slate);

            a {
                display: flex;
                justify-content: center;
                align-items: center;

                padding: 5px 7px;

                &.external {
                    svg {
                        width: 22px;
                        height: 22px;
                        margin-top: -4px;
                    }
                }

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }

    .project-title {
        margin: 0 0 10px;
        color: var(--lightest-slate);
        font-size: var(--fz-xxl);
    }

    .project-description {
        color: var(--light-slate);
        font-size: 17px;

        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            position: relative;
            transition: var(--transition);
            cursor: pointer;
            color: var(--green);
            &:hover,
            &:focus,
            &:active {
                color: var(--green);
                outline: 0;
                &:after {
                    width: 100%;
                }
                & > * {
                    color: var(--green) !important;
                    transition: var(--transition);
                }
            }
            &:after {
                content: '';
                display: block;
                width: 0;
                height: 1px;
                position: relative;
                bottom: 0.37em;
                background-color: var(--green);
                transition: var(--transition);
                opacity: 0.5;
            }
        }
    }

    .project-tech-list {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;

        li {
            font-family: var(--font-mono);
            font-size: var(--fz-xxs);
            line-height: 1.75;

            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

const Project = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         projects: allMarkdownRemark(
    //             filter: {
    //                 fileAbsolutePath: { regex: "/projects/" }
    //                 frontmatter: { showInProjects: { ne: false } }
    //             }
    //             sort: { fields: [frontmatter___date], order: DESC }
    //         ) {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         tech
    //                         github
    //                         external
    //                     }
    //                     html
    //                 }
    //             }
    //         }
    //     }
    // `);

    const data = {
        projects: [
            {
                node: {
                    frontmatter: {
                        title: 'title',
                        tech: ['tech'],
                    },
                    html: 'html',
                },
            },
        ],
    };

    const [showMore, setShowMore] = useState(false);
    const revealTitle = useRef(null);
    const revealArchiveLink = useRef(null);
    const revealProjects = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        sr.reveal(revealArchiveLink.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
            sr.reveal(ref, srConfig(i * 100))
        );
    }, []);

    const GRID_LIMIT = 6;
    const projects = data.projects.filter(({ node }) => {
        console.log(node);
        return node;
    });
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;

    return (
        <StyledProjectsSection>
            <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

            {/* <Link
                className='inline-link archive-link'
                to='/archive'
                ref={revealArchiveLink}
            >
                view the archive
            </Link> */}

            <TransitionGroup className='projects-grid'>
                {projectsToShow &&
                    projectsToShow.map(({ node }, i) => {
                        const { frontmatter, html } = node;
                        const { title, tech } = frontmatter;

                        return (
                            <CSSTransition
                                key={i}
                                classNames='fadeup'
                                timeout={
                                    i >= GRID_LIMIT
                                        ? (i - GRID_LIMIT) * 300
                                        : 300
                                }
                                exit={false}
                            >
                                <StyledProject
                                    key={i}
                                    ref={(el) =>
                                        (revealProjects.current[i] = el)
                                    }
                                    tabIndex='0'
                                    style={{
                                        transitionDelay: `${
                                            i >= GRID_LIMIT
                                                ? (i - GRID_LIMIT) * 100
                                                : 0
                                        }ms`,
                                    }}
                                >
                                    <div className='project-inner'>
                                        <header>
                                            <div className='project-top'>
                                                <div className='folder'>
                                                    <Folder />
                                                </div>
                                            </div>

                                            <h3 className='project-title'>
                                                {title}
                                            </h3>

                                            <div
                                                className='project-description'
                                                dangerouslySetInnerHTML={{
                                                    __html: html,
                                                }}
                                            />
                                        </header>

                                        <footer>
                                            {tech && (
                                                <ul className='project-tech-list'>
                                                    {tech.map((tech, i) => (
                                                        <li key={i}>{tech}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </footer>
                                    </div>
                                </StyledProject>
                            </CSSTransition>
                        );
                    })}
            </TransitionGroup>

            {/* <button
                className='more-button'
                onClick={() => setShowMore(!showMore)}
            >
                Show {showMore ? 'Less' : 'More'}
            </button> */}
        </StyledProjectsSection>
    );
};

export default Project;
