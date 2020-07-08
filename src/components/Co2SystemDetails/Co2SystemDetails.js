import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/CO2_1.gif";
import image2 from "../../assets/img/CO2_2.gif";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function HoseReelDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ padding: "90px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fixed CO2 system</h2>
            <h5 className={classes.description}>
              Fixed carbon dioxide extinguishing systems are highly valued for
              their specific features.CO2 fire suppression results in minimal
              damage. Furthermore, CO2 does not conduct electricity thus leading
              to a widespread use in on board spaces filled with sensitive and
              valuable electronic equipment and machinery.
            </h5>
            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
              </div>
             
            </div>

            <div className={classes.row}>
            <div className={classes.column_large}>
                <img src={image2} alt="Snow" style={{ width: "100%" }} />
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
