import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image from "../../assets/img/facility.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function OurSubordenatesDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{padding: '90px'}}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Equipment Testing & Inspaction Company Ltd.
            </h2>
            <h5 className={classes.description}>
              Seasafe is a one stop solution provider for all types of marine
              safety equipment and systems. They are the authorised service
              partners of world renowned manufactrers.
            </h5>
            <h5 className={classes.description}>
              This company is our valuable sub ordinaries that provide different
              Categories & Brands equipment testing and inspections
            </h5>
            <h5 className={classes.description}>
              They involved in the design, sales, installation and servicing of
              all types of Marine Navigational, Safety and Communication
              equipment for the Marine, offshore oil and gas industry.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
