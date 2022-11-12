import React, { Component, Fragment } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {Link, NavLink} from "react-router-dom"
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/responsive.css';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';


class TopNavigation extends Component {

     constructor(props){
          super(props);
          this.state={
               navBarTitle:"navTitle",
               navBarLogo: [whiteLogo], // object
               navVariant:"dark",
               navBarBack:"navBackground",
               navBarItem:"navItem",
               pageTitle:props.title
          }
     }

     onScroll=()=>{
          if(window.scrollY>99){
               this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})

          }else if(window.scrollY<99){

               this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
          }
     }

          componentDidMount(){
               window.addEventListener('scroll',this.onScroll)
          }


     render() {
          return (
                <Fragment>
      <title>{this.state.pageTitle }</title>         
  <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
  <Navbar.Brand className={this.state.navBarTitle} href="/"> <img className="logo" src={this.state.navBarLogo} alt="---"/> <NavLink to="/"></NavLink> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <Nav.Link>  <Link  exact className={this.state.navBarItem} to="/">KEZDŐLAP</Link > </Nav.Link>

<Nav.Link>  <Link  exact  className={this.state.navBarItem} to="/about">RÓLUNK</Link > </Nav.Link>

<Nav.Link>   <Link  exact className={this.state.navBarItem} to="/minden">TERMÉKEK</Link > </Nav.Link>

<Nav.Link>   <Link  exact className={this.state.navBarItem} to="/contact">KAPCSOLAT</Link > </Nav.Link>


     
       
    </Nav>
  </Navbar.Collapse>
</Navbar>

                </Fragment>
          )
     }
}

export default TopNavigation