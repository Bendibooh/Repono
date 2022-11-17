import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import pageone from '../../asset/image/pageone.png';
import pagetwo from '../../asset/image/pagetwo.png';
import pagethree from '../../asset/image/pagethree.jpg';
import imgone from '../../asset/image/logo-tuev-sued.png';
import imgtwo from '../../asset/image/logo-ce-white.png';
import imgthree from '../../asset/image/ihk-koeln.png';
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
                    <p className="serviceDescription">Lorem ipsum dolor</p>
                    <Link to="/serviceDetails"> <Button variant="primary">Részletek</Button></Link>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img  className="WelcomeImg"  src={pagetwo} alt="..."/>
               <h1 className="serviceName">Karos állványrendszerek </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               <Link to="/serviceDetails"> <Button variant="primary">Részletek</Button></Link>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <img className="WelcomeImg" src={pagethree} alt="..."/>
               <h1 className="serviceName">Bejárható állványrendszerek  </h1>
               <p className="serviceDescription">Lorem ipsum dolor</p>
               <Link to="/serviceDetails"> <Button variant="primary">Részletek</Button></Link>
               </Col>
          </Row>






   {/* // Intro Footer Start  */}



          <Row className="intro-footer bg-base text-center mt-5">

<Col lg={4} md={6} sm={12}>
        
<Row>
<Col lg={4} md={6} sm={12}>
<img className="sideImg" src={imgone} alt="..."/>
</Col>

<Col lg={4} md={6} sm={12}>

</Col>
</Row>
</Col>



<Col lg={4} md={6} sm={12}>
        
        <Row>
             <Col lg={4} md={6} sm={12}>
<img className="sideImg" src={imgtwo} alt="..."/>
             </Col>

             <Col lg={4} md={6} sm={12}>

             </Col>
        </Row>
             </Col>





             <Col lg={4} md={6} sm={12}>
        
        <Row>
             <Col lg={6} md={6} sm={12}>
<img className="sideImg" src={imgthree} alt="..."/>
             </Col>

             <Col lg={6} md={6} sm={12}>

             </Col>
        </Row>
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