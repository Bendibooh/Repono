import React, { Component, Fragment } from 'react'
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Charts from '../components/Charts/Charts';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';

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
    <Services />
    <Charts/>
    <Summary/>
    <RecentProject/>
    <Courses />
    <Footer />
</Fragment>
    )
  }
}

export default HomePage