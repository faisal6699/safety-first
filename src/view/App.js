import React from 'react';
import className from "classnames"
import Carousel from 'react-slick'
import { makeStyles } from "@material-ui/core/styles"



import image from "../assets/img/safety-7th.jpeg"

import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Buttons";
import Parallax from "../components/Parallax/Parallax";
import Footer from "../components/Footer/Footer";

//import SectionCarousel from '../components/Section/SectionCarousel'

import landingPageStyle from "../assets/jss/material-kit-react/views/landingPage";
// Sections for this page
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";
import WorkSection from "./Sections/WorkSection";
import SectionCarousel from './Sections/SectionCarousel'
import About from './pages/About'

const useStyles = makeStyles(landingPageStyle)

const dashboardRoutes = []

console.log(dashboardRoutes)

function App(props) {
  const classes = useStyles()
  const {...rest} = props
  
  return (
    <div>
      <Header
        color="transparent"
        brand="Safety First (PVT.) Ltd."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax filter image={image}>
    
      <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Safety First (PVT.) Ltd.</h1>
              <h4>
              We work for your safety & security. 
              Government approved Company. 
              Equipment Testing & Inspection Company Ltd.
              We have achieved ISO 9001-2008 Certificate on 14th Aug 2012.
              </h4>
              
              
            </GridItem>
          </GridContainer>
        </div>

      </Parallax>
      <div className={className(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
         
        </div>
        
        <SectionCarousel />
        <WorkSection />
      </div>
     
      <Footer />
      </div>
  );
}

export default App;
