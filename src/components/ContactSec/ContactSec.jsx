import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


 class ContactSec extends Component {
     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col lg={6} md={6} sm={12}>
     <h1 className="serviceName">Gyors Kapcsolat</h1>


     <Form>
  <Form.Group  >
    <Form.Label>Neve </Form.Label>
    <Form.Control type="text" placeholder="Kérlek írd be a neved!" /> 
  </Form.Group>

  <Form.Group  >
    <Form.Label>E-mail címe </Form.Label>
    <Form.Control type="email" placeholder="Kérlek add meg az e-mail címed!" /> 
  </Form.Group>

  <Form.Group  >
    <Form.Label>Message  </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>



  <Button variant="primary" type="submit">
    Küldés
  </Button>
</Form>

                              </Col>



                              <Col lg={6} md={6} sm={12}>
      <h1 className="serviceName">Discuss Now</h1>

      <p className="serviceDescription">
          6522 Baltimore National Pike CatonsVille, Califonia USA <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email : Support@ele.com<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone : 434343434<br></br>
     </p>

                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default ContactSec