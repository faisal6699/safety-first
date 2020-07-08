import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Sprinkler_1.gif";
import image2 from "../../assets/img/Sprinkler_2.gif";
import image3 from "../../assets/img/Sprinkler_3.gif";
import image4 from "../../assets/img/Sprinkler_4.gif";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function FireSprinklerDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ padding: "90px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Sprinkler System</h2>
            <h5 className={classes.description}>
              We offer our clients Sprinkler system i.e. in compliance with NFPA
              requirements. Our providing equipments are UL listed. Sprinkler is
              thermo-sensitive quarzoid liquid glass bulb. The bulb breaks as a
              result of the thermal expansion of the liquid inside the bulb. The
              time it takes before a bulb breaks is dependent on the
              temperature. Below the design temperature, it does not break, and
              above the design temperature it breaks, Under standard testing
              procedures (135 °C air at a velocity of 2.5 m/s), at 68 °C
              sprinkler bulb will break within 7 to 33 seconds.
            </h5>
            <div className={classes.row}>
              <div className={classes.column}>
                <img src={image1} alt="Snow" style={{ width: "33.3%" }} />
              </div>
              <div className={classes.column}>
                <img src={image2} alt="Forest" style={{ width: "33.3%" }} />
              </div>
            </div>
            <div className={classes.row}>
            <div className={classes.column}>
                <img src={image3} alt="Mountains" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{ textAlign: 'center'}}> Fire Sprinkler</h5>
              </div>
              
            </div>

            <div className={classes.row}>
                <div className={classes.column}>
                <img src={image4} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{ textAlign: 'center'}} > Fire Sprinkler</h5>
              </div>
            </div>

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
