import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Firedoor_1.png";
import image2 from "../../assets/img/Firedoor_2.png";
import image3 from "../../assets/img/Firedoor_3.png";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/products";

const useStyles = makeStyles(styles);

export default function FireDoorDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Salient Features Of Fire Door</h2>
            <ul className={classes.ul_design}>
        <li className={classes.description}>
          <strong>Frame & Leaf Materials: </strong>
          Galvanized steel sheet.
        </li>
        <li className={classes.description}>
          <strong>Frame Material Thickness: </strong>
          1.0 - 1.4 mm.
        </li>
        <li className={classes.description}>
          <strong>Door Leaf: </strong>
          45 - 52 mm.
        </li>
        <li className={classes.description}>
          <strong>Sheet Thickness: </strong>
          0.8 - 1.2 mm.
        </li>
        <li className={classes.description}>
          <strong>Infil Marerials: </strong>
          Ceramic fiber board, Mineral wool, Honey comb etc.
        </li>
        <li className={classes.description}>
          <strong>Vision Panel: </strong>
          Fire Rated, UL Listed. 
        </li>
        <li className={classes.description}>
          <strong>Hinges: </strong>
          4.5 X 4.5 X 3.0, UL Listed.
        </li>
        <li className={classes.description}>
          <strong>Panic Bar Device: </strong>
          UL Listed.
        </li>
        <li className={classes.description}>
          <strong>Door Lock Set: </strong>
          Fire - resistant mortise lock, UL Listed.
        </li>
        <li className={classes.description}>
          <strong>Door Closer: </strong>
          Overhead Door Closer, UL Listed.
        </li>
        
        <li className={classes.description}>
          <strong>Paint: </strong>
          Coated in RAL Color, Fire Red.
        </li>
        <li className={classes.description}>
          <strong>Fire Rating: </strong>
          n90 - 180 minutes.
        </li>
        <li className={classes.description}>
          <strong>Country Of Origin: </strong>
          China, Taiwan, UAE, India.
        </li>
        <li className={classes.description}>
          <strong>Certification: </strong>
          UL, Warrington, FM.
        </li>
      </ul>

          </GridItem>
        </GridContainer>
      
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Door Accessories</h2>
            
            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
              </div>
              <div className={classes.column_large}>
                <img src={image2} alt="Snow" style={{ width: "100%" }} />
              </div>
              <div className={classes.column_large}>
                <img src={image3} alt="Snow" style={{ width: "100%" }} />
              </div>
              </div>
             
              
           
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
