import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import imgone from '../../asset/image/logo-tuev-sued.png'
import imgtwo from '../../asset/image/logo-ce-white.png'
import imgthree from '../../asset/image/ihk-koeln.png';

class Footer extends Component {
     render() {
          return (
               <Fragment>
      <Container fluid={true} className="footerSection">
                         <Row>
     <Col lg={2} md={6} sm={12} className="p-5 text-center">
     <h2 className="footerName text-center">Test </h2>
          
          <div className="social-container">
     
             <img className="sideImg" alt="..." src={imgone} />  
        

          <img className="sideImg" alt="..." src={imgtwo}/>  


          <img className="sideImg"  alt="..."src={imgthree} />  

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
     <a className="text-center copyrightlink" href="/#">© Copyright 2022, by Tesztecske</a>
                         </Row>
                    </Container>


 

            









               </Fragment>
          )
     }
}

export default Footer