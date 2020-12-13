import React, { useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled, { ThemeProvider } from 'styled-components';
import sr from '../utils/sr';
import { Image } from 'react-bootstrap';
import { srConfig } from '../../editable-stuff/config.js';
import GlobalStyle from '../style/GlobalStyle.js';
import theme from '../style/theme.js';
// import { Icon } from '@components/icons';

const StyledProject = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }
            @media (max-width: 768px) {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
            }
            @media (max-width: 480px) {
                padding: 25px 25px 20px;
            }
        }
        .project-tech-list {
            justify-content: flex-end;

            li {
                margin: 0 0 5px 20px;

                @media (max-width: 768px) {
                    margin: 0 0 5px 10px;
                }
            }
        }
        .project-links {
            justify-content: flex-end;
            margin-left: 0;
            margin-right: -10px;
        }
        .project-image {
            grid-column: 1 / 8;

            @media (max-width: 768px) {
                grid-column: 1 / -1;
            }
        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;

        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            padding: 40px 40px 30px;
            z-index: 5;
        }

        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }
    }

    .project-overline {
        margin: 10px 0;
        // color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        font-weight: 400;
    }

    .project-title {
        // color: var(--lightest-slate);
        font-size: clamp(24px, 5vw, 28px);

        @media (min-width: 768px) {
            margin: 0 0 20px;
        }

        @media (max-width: 768px) {
            // color: var(--white);
        }
    }

    .project-description {
        box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
        }

        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: 4px;
        background-color: aliceblue;
        // color: var(--light-slate);
        font-size: var(--fz-lg);

        @media (max-width: 768px) {
            padding: 20px 0;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }

        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            position: relative;
            transition: var(--transition);
            cursor: pointer;
            // color: var(--green);
            &:hover,
            &:focus,
            &:active {
                // color: var(--green);
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
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;

        li {
            margin: 0 20px 5px 0;
            // color: var(--light-slate);
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            margin: 10px 0;

            li {
                margin: 0 10px 5px 0;
                // color: var(--lightest-slate);
            }
        }
    }

    .project-links {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        // color: var(--lightest-slate);

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            padding: 10px;

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

    .project-image {
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }

        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            height: 100%;
            opacity: 0.25;
        }

        a {
            width: 100%;
            background-color: var(--green);
            border-radius: 4px;
            vertical-align: middle;

            &:hover,
            &:focus {
                background: transparent;

                &:before,
                .img {
                    background: transparent;
                    filter: none;
                }
            }

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 3;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                background-color: var(--navy);
                mix-blend-mode: screen;
            }
        }

        .img {
            border-radius: 4px;
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1) brightness(90%);

            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
                filter: grayscale(100%) contrast(1) brightness(80%);
            }
        }
    }
`;

const Project = () => {
    //   const data = useStaticQuery(graphql`
    //     query {
    //       featured: allMarkdownRemark(
    //         filter: { fileAbsolutePath: { regex: "/featured/" } }
    //         sort: { fields: [frontmatter___date], order: DESC }
    //       ) {
    //         edges {
    //           node {
    //             frontmatter {
    //               title
    //               cover {
    //                 childImageSharp {
    //                   fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
    //                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //                   }
    //                 }
    //               }
    //               tech
    //               github
    //               external
    //             }
    //             html
    //           }
    //         }
    //       }
    //     }
    //   `);

    const data = {
        projects: [
            {
                node: {
                    frontmatter: {
                        title: 'title',
                        tech: ['tech'],
                        cover: require('../../editable-stuff/hashirshoaeb.png'),
                    },
                    html: 'html',
                },
            },
        ],
    };

    const featuredProjects = data.projects.filter(({ node }) => node);

    const revealTitle = useRef(null);
    const revealProjects = useRef([]);
    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
            sr.reveal(ref, srConfig(i * 100))
        );
    }, []);

    return (
        <section
            id='projects'
            className='bg-light m-0 jumbotron jumbotron-fluid'
        >
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div className='section'>
                    <h2 className='numbered-heading' ref={revealTitle}>
                        Some Things I’ve Built
                    </h2>

                    <div>
                        {featuredProjects &&
                            featuredProjects.map(({ node }, i) => {
                                const { frontmatter, html } = node;
                                const {
                                    external,
                                    title,
                                    tech,
                                    github,
                                    cover,
                                } = frontmatter;

                                return (
                                    <StyledProject
                                        key={i}
                                        ref={(el) =>
                                            (revealProjects.current[i] = el)
                                        }
                                    >
                                        <div className='project-content'>
                                            <p className='project-overline'>
                                                Featured Project
                                            </p>
                                            <h3 className='project-title'>
                                                {title}
                                            </h3>
                                            <div
                                                className='project-description'
                                                dangerouslySetInnerHTML={{
                                                    __html: html,
                                                }}
                                            />

                                            {tech.length && (
                                                <ul className='project-tech-list'>
                                                    {tech.map((tech, i) => (
                                                        <li key={i}>{tech}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        <div className='project-image'>
                                            <div
                                                className='img'
                                                style={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                    maxWidth: '100%',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        paddingBottom:
                                                            '62.2857%',
                                                    }}
                                                ></div>
                                                {/* <Image
                                                // fluid={cover.childImageSharp.fluid}
                                                alt={title}
                                                style={{
                                                    position: 'absolute',
                                                    top: '0px',
                                                    left: '0px',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition:
                                                        'center center',
                                                    opacity: 0,
                                                    transitionDelay: '500ms',
                                                }}
                                                src={cover}
                                                className='img'
                                            /> */}
                                                <picture>
                                                    <Image
                                                        style={{
                                                            position:
                                                                'absolute',
                                                            top: '0px',
                                                            left: '0px',
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            objectPosition:
                                                                'center center',
                                                            // opacity: 0,
                                                            transitionDelay:
                                                                '500ms',
                                                        }}
                                                        src={cover}
                                                    ></Image>
                                                </picture>
                                            </div>
                                        </div>
                                    </StyledProject>
                                );
                            })}
                    </div>
                </div>
            </ThemeProvider>
        </section>
    );
};

export default Project;
