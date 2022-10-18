import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
     render() {
          return (
               <Fragment>
      <Container fluid={true} className="footerSection">
                         <Row>
     <Col lg="3" md={6} sm={12} className="p-5 text-center">
     <h2 className="footerName text-center">Follow Us </h2>
          
          <div className="social-container">
          <a className="facebook social" href="/#">
             <FontAwesomeIcon icon={faFacebook} size="2x" />  
          </a>
          <a href="/#"  className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />  
          </a>
          <a href="/#"  className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />  
          </a> 
          </div>

     </Col>



     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Address </h2>
     <p className="footerDescription">
          9022, Lorem Ipsum, Lorem ipsum <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email: Support@text.com<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone: 434343434<br></br>
     </p>
     </Col>


     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Information </h2>
     <a className="footerLink" href="/#">About Me </a> <br></br>
     <a  className="footerLink" href="/#">Company Profile </a> <br></br>
     <a className="footerLink" href="/#">Contact Us  </a> <br></br>
     </Col>

     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Policy  </h2>
     <a className="footerLink" href="/#">Xyz  </a> <br></br>
     <a className="footerLink" href="/#">Xyz  </a> <br></br>
     <a className="footerLink" href="/#">Xyz   </a> <br></br>
     </Col>
                         </Row>
                    </Container>


      <Container fluid={true} className="text-center copyrightSection">
<a className="copyrightlink" href="/#">© Copyright 2022, by Tesztecske</a>
               </Container>









               </Fragment>
          )
     }
}

export default Footer