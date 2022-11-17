import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';
import ContactSec from '../components/ContactSec/ContactSec'

export class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
<Fragment>
<TopNavigation title="Kezdőlap" /> 
      <TopBanner /> 
      <Welcome />    
    <RecentProject/>
    <Courses />
    <ContactSec />
    <Footer />
</Fragment>
    )
  }
}

export default HomePage