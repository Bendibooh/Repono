import React, { Component, Fragment } from 'react'

import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RolunkDesc from '../components/RolunkDesc/RolunkDesc'
import TopNavigation from '../components/TopNavigation/TopNavigation'

 class AboutPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
                <Fragment>
                 <TopNavigation title="About Us" />  
                 <PageTop pagetitle="About Us" />  
                
                 <RolunkDesc />
                 <Footer />
                </Fragment>
          )
     }
}

export default AboutPage