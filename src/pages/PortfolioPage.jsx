import React, { Component, Fragment } from 'react'
import MindenTermek from '../components/MindenTermek/MindenTermek'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PortfolioPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
              <Fragment>
                   <TopNavigation title="Portfolionk" /> 
                   <PageTop pagetitle="Portfolio" />
                   <MindenTermek />
                   <Footer />
              </Fragment>
          )
     }
}

export default PortfolioPage