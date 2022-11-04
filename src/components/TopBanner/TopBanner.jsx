import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import reponologo from '../../asset/image/reponohatter.svg';


class TopBanner extends Component {
     render() {
          return (
               <Fragment>
        <Container fluid={true} className="topFixedBanner p-0" >
               <div className="topBannerOverlay">
               <Container className="topContent">
                    <Row>
               <Col className="text-center">
               <img className="reponoLogo" src={reponologo} alt="..." />
               <h4 className="topSubTitle">Solution KFT.</h4>
               <Button variant="primary">Kapcsolat</Button>
               
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