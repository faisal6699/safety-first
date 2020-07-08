import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image from "../../assets/img/Chairman_Pic.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function OurProjectsDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Finished Project</h2>
            <h5 className={classes.title}>
              So far we did many small and large projects on Fire Protection
              System. Noteworthy of them are:
            </h5>
            <ul className={classes.ul_design}>
              <li className={classes.description}>
                AMERICAN INTERNATIONAL SCHOOL DHAKA (AISD)
              </li>
              <li className={classes.description}>KHULNA POWER PLANT</li>
              <li className={classes.description}>
                WESTERN MARINE SHIPYARD (Here we did all types of fire
                protection system for different Foreign and Local vessels )
              </li>
              <li className={classes.description}>JAMUNA MOBIL</li>
            </ul>
          </GridItem>

          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Running Project</h2>
            <h5 className={classes.title}>
              We are now running many big projects on Fire Fighting System for
              different garments.
            </h5>
            <ul className={classes.ul_design}>
              <li className={classes.description}>Picard in Asulia</li>
              <li className={classes.description}>
                Ananta Garments and Ananta Sportswear Ltd.
              </li>
              <li className={classes.description}>
                WESTERN MARINE SHIPYARD (Here we are now doing all types of fire
                protection system for different Mother vessels, Oil tanker etc.)
              </li>
            </ul>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
