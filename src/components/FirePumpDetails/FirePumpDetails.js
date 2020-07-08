import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/FirePump.gif";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function FirePumpDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ padding: "90px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Pump</h2>
            <h5 className={classes.description}>
              We offer our clients fire pumps that are designed to provide water
              to Stand pipe, Sprinkler and Hydrant systems for Fire suppression
              in Industrial and commercial facilities. Our providing pumps are
              UL listed.
            </h5>
            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "50%" }} />
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
