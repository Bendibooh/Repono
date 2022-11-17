import React, { Component, Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RecentProject from '../components/RecentProject/RecentProject'
import TopNavigation from '../components/TopNavigation/TopNavigation'


class AllServicePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>
               <TopNavigation title="All Courses" />  
                  <PageTop pagetitle="Szolgáltatások" />
                  <RecentProject/>
                  <ContactSec />
                  <Footer />
             </Fragment>
          )
     }
}

export default AllServicePage