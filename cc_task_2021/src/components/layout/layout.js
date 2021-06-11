// @flow
import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
  return (
    <div>
        <Header/>
            <Container className='main-container' >
                {props.children}
            </Container>
        <Footer />
    </div>
  );
};

export default Layout;