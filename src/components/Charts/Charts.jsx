import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class Charts extends Component {

     constructor(){
          super();
          this.state={
            data:[
                {Techonology:'1',Kivitelezett:100},
                {Techonology:'2',Kivitelezett:90},
                {Techonology:'3',Kivitelezett:95},
                {Techonology:'4',Kivitelezett:85},
                {Techonology:'5',Kivitelezett:80},
                {Techonology:'6',Kivitelezett:70},
                {Techonology:'7',Kivitelezett:60},
                {Techonology:'8',Kivitelezett:100}                   
            ]
          }
     }



     render() {
          var blue = "#051b35"
          return (
                <Fragment>
     <Container className="text-center">
     <h1 className="serviceMainTitle">SZOLGÁLTATÁSOK GYAKORISÁGA</h1>
               <div className="bottom"></div>
          <Row>
           <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                 <ResponsiveContainer>   
               <BarChart width={100} height={300} data={this.state.data}>

               <XAxis dataKey="Techonology" /> 
               <Tooltip />
               <Bar dataKey="Kivitelezett" fill={blue}>

               </Bar>


               </BarChart>
               </ResponsiveContainer>
               
            </Col>




               
            <Col lg={6} md={12} sm={12}>
               <p className="text-justify serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br><br></br>

               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>

               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </Col>
          </Row>
     </Container>


                </Fragment>
          )
     }
}

export default Charts