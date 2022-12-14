import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import reponologo from '../../asset/image/reponohatter.svg';

//CustomButton animation on hover black linear gradien


class TopBanner extends Component {
     render() {
          return (
               <Fragment>
        <Container fluid={true} className="topFixedBanner p-0" >
               <div className="topBannerOverlay">
               <Container className="topContent">
                    <Row>
               <Col className="text-center">
               <img className="reponoLogo " src={reponologo} alt="..." />
              <br></br>
               <Link  to="/contact"  style={{ textDecoration:'none' }}> <a href="/#" className="center Cutsombutton-85" >Kapcsolat</a></Link> 
               
               </Col>
                    </Row> 
               </Container> 
               </div>
                    </Container>
                    
               </Fragment>
          )
     }
}

export default TopBanner