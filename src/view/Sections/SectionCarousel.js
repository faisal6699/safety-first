import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";

import image1 from "../../assets/img/1.jpg";
import image2 from "../../assets/img/2.jpg";
import image3 from "../../assets/img/3.jpg";
import image4 from "../../assets/img/4.jpg";
import image5 from "../../assets/img/5.jpg";

import image6 from "../../assets/img/6.jpg";
import image7 from "../../assets/img/7.jpg";




import styles from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>

    
        
   
    <div className={classes.section}>
        
     
      <div className={classes.container}>
      
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <h1 style={{ fontWeight: "500",fontFamily: `"Roboto Slab", "Times New Roman", serif`, 
          textAlign:'center', marginTop: "30px",minHeight: "32px"}}
    >Products we deals</h1>

            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  
                </div>
                <div>
                  <img src={image2} alt="Second slide" className="slick-image"/>
                  
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                 
                </div>

                <div>
                  <img src={image4} alt="Forth slide" className="slick-image" />
                 
                </div>

                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                 
                </div>


                <div>
                  <img src={image6} alt="First slide" className="slick-image" />
                  
                </div>
                <div>
                  <img
                    src={image7}
                    alt="Second slide"
                    className="slick-image"
                  />
                  
                </div>
                
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    </div>
    
  );
}
