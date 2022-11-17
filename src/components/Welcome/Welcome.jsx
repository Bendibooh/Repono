import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import pageone from '../../asset/image/pageone.png';
import pagetwo from '../../asset/image/pagetwo.png';
import pagethree from '../../asset/image/pagethree.jpg';

import { Link } from 'react-router-dom';

 class Welcome extends Component {
     render() {
          return (
              <Fragment>
                   <div className="intro-area--top"> 
<Container>
     <Row>
          <Col lg={12} md={12} sm={12}>
          <div className="section-title text-center">
               <div className="intro-area-inner">
               <h6 className="sub-title double-line">ÜDVÖZÖLLEK</h6>
               <h2 className="maintitle">
    A Repono<br></br>
    Solution KFT. oldalán!
               </h2>


               <Container className="text-center mt-5">
          <Row>
               <Col lg={4} md={6} sm={12}>
                    <img className="WelcomeImg" src={pageone}  alt="..."/>
                    <h1 className="serviceName">Soros raklapos állványrendszer </h1>
                    <p className="serviceDescription ">Lorem ipsum dolor</p>
                    <Link to="/serviceDetails"> <Button className="WelcomeButton" variant="primary">Részletek</Button></Link>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img  className="WelcomeImg"  src={pagetwo} alt="..."/>
               <h1 className="serviceName">Karos állványrendszerek </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               <Link to="/serviceDetails"> <Button className="WelcomeButton" variant="primary">Részletek</Button></Link>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img className="WelcomeImg" src={pagethree} alt="..."/>
               <h1 className="serviceName">Bejárható állványrendszerek  </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               <Link to="/serviceDetails"> <Button className="WelcomeButton" variant="primary">Részletek</Button></Link>
               </Col>
          </Row>






  


 


               </Container> 


               </div>
          </div> 
          </Col>
     </Row>
</Container>
                   </div>
              </Fragment>
          )
     }
}

export default Welcome