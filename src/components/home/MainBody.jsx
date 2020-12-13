import React from 'react';
import Typist from 'react-typist';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const MainBody = React.forwardRef(
    ({ gradient, title, message, icons }, ref) => {
        return (
            <Jumbotron
                fluid
                id='home'
                style={{
                    background: `linear-gradient(136deg,${gradient})`,
                    backgroundSize: '1200% 1200%',
                }}
                className='title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0'
            >
                <div id='stars'></div>
                <Container className='text-center'>
                    <h1 ref={ref} className='display-1'>
                        {title}
                    </h1>
                    <a
                        className='btn btn-outline-light btn-lg '
                        href='#aboutme'
                        role='button'
                        aria-label='Learn more about me'
                    >
                        More about me
                    </a>
                </Container>
            </Jumbotron>
        );
    }
);

export default MainBody;
