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
                              <div class="loader">
  <div class="loader-inner">
    <div class="loader-line-wrap">
      <div class="loader-line"></div>
    </div>

  </div>
</div>
                              </Col>
                         </Row>
                    </Container>

               </Fragment>


          )
     }
}

export default Loading