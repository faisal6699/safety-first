import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/firealarm_1.gif";
import image2 from "../../assets/img/firealarm_2.gif";
import image3 from "../../assets/img/firealarm_3.gif";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function FireAlarmDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ padding: "90px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Alarm System</h2>
            <h5 className={classes.description}>
              We offer our clients a qualitative range of fire alarm systems
              that is manufactured by certified companies. These fire alarm
              systems work on 230V supply and have provision for battery backup.
              The equipment provides relay output for interfacing with security
              panel, audio alarm via siren or buzzer.
            </h5>
            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
              </div>
              <div className={classes.column_large}>
                <img src={image2} alt="Snow" style={{ width: "100%" }} />
              </div>
            </div>

            <div className={classes.row}>
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
