import React from 'react';
import className from "classnames"
import Carousel from 'react-slick'
import { makeStyles } from "@material-ui/core/styles"



import image from "../../assets/img/safety-7th.jpeg"

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Buttons";
import Parallax from "../../components/Parallax/Parallax";
import Footer from "../../components/Footer/Footer";
import AboutDetails from "../../components/AboutDetails/AboutDetails";
import MissionVisionDetails from "../../components/MissionVisionDetails/MissionVisionDetails";
import OurProjectsDetails from "../../components/OurProjectsDetails/OurProjectsDetails";

//import SectionCarousel from '../components/Section/SectionCarousel'

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";
// Sections for this page
import ProductSection from "../Sections/ProductSection";
import TeamSection from "../Sections/ContactUs";
import WorkSection from "../Sections/WorkSection";
import SectionCarousel from '../Sections/SectionCarousel'
import ChairmanDetails from '../../components/ChairmanDetails/ChairmanDetails';

const useStyles = makeStyles(styles)

function OurProjects(props){
    const classes = useStyles()
    const {...rest } = props
    //console.log("akram")
    return(

    <div>
    
     <Header
        color="success"
        //routes={dashboardRoutes}
        brand="Safety First (PVT.) Ltd."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
     
   
      <div className={className(classes.main)}>
      
      <div className={classes.container}>
          
          <OurProjectsDetails />
          </div>
      </div>
        <Footer />
      
    </div>
    )
    
}

export default OurProjects;