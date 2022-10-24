import React, { Component, Fragment } from 'react'
import {Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetails';
import AllServicePage from '../pages/AllServicePage';


class AppRouter extends Component {
     render() {
          return (
               <Fragment>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portoflio' element={<PortfolioPage />} />
        <Route path='/minden' element={<AllServicePage />} />
        <Route path='/contact' element={< ContactPage/>} />
          
        <Route path='/projectdetails' element={<ProjectDetailPage />} />
        <Route path='/coursedetails' element={<CourseDetailsPage />} />
      </Routes>
 
               </Fragment>
          )
     }
}

export default AppRouter

