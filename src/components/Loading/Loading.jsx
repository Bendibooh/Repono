import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoaderIcon from '../../asset/image/loader2.svg';

class Loading extends Component {
     render() {
          return (
       
               <Fragment>
                    <Container className="text-center">
                         <Row>
                              <Col>
                              <object type="image/svg+xml" data={LoaderIcon} className="loader" aria-labelledby="ReactLogo" />
                              </Col>
                         </Row>
                    </Container>

               </Fragment>


          )
     }
}

export default Loading