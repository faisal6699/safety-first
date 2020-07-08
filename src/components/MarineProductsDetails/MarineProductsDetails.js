import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/marine1.jpg";
import image2 from "../../assets/img/marine2.jpg";
import image3 from "../../assets/img/marine3.jpg";



// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/products";

const useStyles = makeStyles(styles);

export default function MarineProductsDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2
              className={classes.title}
              style={{ listStyleType: "none", textAlign: "center" }}
            >
              We supply the following marine items
            </h2>
            <ul className={classes.ul_design} style={{ listStyleType: "none" }}>
              <li className={classes.description}>
                Life buoy, Life jacket, Immersion suits, Breathing Apparatus
                sets
              </li>
              <li className={classes.description}>
                All kind of marine safety & fire equipment
              </li>
              <li className={classes.description}>Navigational equipment</li>
            </ul>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
                <h5
                  className={classes.description}
                  style={{ textAlign: "center" }}
                >
                  Life boat
                </h5>
              </div>
              <div className={classes.column_large}>
                <img src={image2} alt="Snow" style={{ width: "100%" }} />
                <h5
                  className={classes.description}
                  style={{ textAlign: "center" }}
                >
                 Life boat
                </h5>
              </div>
              <div className={classes.column_large}>
                <img src={image3} alt="Snow" style={{ width: "100%" }} />
                <h5
                  className={classes.description}
                  style={{ textAlign: "center" }}
                >
                  Life jacket
                </h5>
              </div>
            </div>

            
            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
