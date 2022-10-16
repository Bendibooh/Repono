import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';


class Services extends Component {
     render() {
          return (
<Fragment>
     <Container className="text-center">
          <h1 className="serviceMainTitle">Szolgáltatások</h1>
               <div className="bottom"></div>
          <Row>  
               <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                  <img className="ecommerceIcon" src={ecommerceIcon} alt="..."/> 
                  <h2 className="serviceName">1</h2>
                  <p className="serviceDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
               </Col> 

               <Col lg={4} md={6} sm={12}>
               <div className="serviceCard text-center">
                  <img className="designIcon"  src={designIcon} alt="..."/>
                  <h2 className="serviceName">2</h2>
                  <p className="serviceDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              </div>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <div className="serviceCard text-center">
                  <img className="webIcon"  src={webIcon} alt="..."/> 
                  <h2 className="serviceName">3</h2>
                  <p className="serviceDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
               </Col>
          </Row>
     </Container>

</Fragment>
          )
     }
}

export default Services