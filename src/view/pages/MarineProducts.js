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
import FireFightingProductsDetails from "../../components/FireFightingProductsDetails/FireFightingProductsDetails";
import MarineProductsDetails from "../../components/MarineProductsDetails/MarineProductsDetails";

//import SectionCarousel from '../components/Section/SectionCarousel'

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/products";
// Sections for this page
import ProductSection from "../Sections/ProductSection";
import TeamSection from "../Sections/ContactUs";
import WorkSection from "../Sections/WorkSection";
import SectionCarousel from '../Sections/SectionCarousel'

const useStyles = makeStyles(styles)

function MarineProducts(props){
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
          
          <MarineProductsDetails />
          </div>
      </div>
        <Footer />
      
    </div>
    )
    
}

export default MarineProducts;