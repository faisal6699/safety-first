import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Germanischer.jpg";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import InfoArea from "../InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function PartnersDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>
              We have two respective partners, they are:
            </h2>
            <h3 className={classes.title}>GMS (Global Marine Safety):</h3>
            <h5 className={classes.description}>
              They are experience in the Industry stretches back to past 10-15
              Years through their company founders, were the early pioneers in
              bringing the Fire, Rescue, Safety Services and Quality to a higher
              and a new level in Singapore.
            </h5>

            <h3 className={classes.title}>VIKING:</h3>
            <h5 className={classes.description}>
              VIKING is a market leader in maritime safety, providing and
              servicing essential safety equipment for passenger and commercial
              vessels, offshore installations and vessels, the defence sector,
              industrial fire fighting as well as leisure yachts.
            </h5>
            <h5 className={classes.description}>
              They manufactured in four locations: Esbjerg in Denmark, Bergen in
              Norway, Colorado in the US and Bangkok, Thailand. VIKING’s unique
              global network includes 60 branch offices and 270 certified
              servicing stations.
            </h5>
            <h5 className={classes.description}>
              VIKING offers a choice of global safety solutions. Product
              portfolio includes: marine evacuation systems, offshore evacuation
              and crew transfer systems, liferafts, boats, lifesaving
              appliances, and protective clothing such as immersion suits, work
              suits, fire suits and lifejackets.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
