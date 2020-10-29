import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import { Navbar } from "react-bootstrap";
import Pic1 from './images/cover.jpg'
import {Image,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="100%">
        <Navbar className='App-header' position="static">
          <Typography
            variant="h5"
            align="center"
            className='header'>
            Easy Learning
          </Typography>
        </Navbar>
        <Row>
                <Col md='6'>
                {/* <Image align='center' className='imagecover' src={Pic1} alt='homepic'/> */}
                </Col>
                <Col md='6'>
                <h3 align="center">A Platform for develope your learning interest</h3>
                </Col>
            </Row>
               
               <PostMessages />
   
        
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default App;
