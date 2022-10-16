import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

class TopBanner extends Component {
     render() {
          return (
               <Fragment>
<Container fluid={true} className="topFixedBanner p-0" >
               <div className="topBannerOverlay">
               <Container className="topContent">
                    <Row>
               <Col className="text-center">
               <h1>Repono</h1>
               <h4>Solution Kft.</h4>
               <Button variant="primary">Továbbiak</Button>

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