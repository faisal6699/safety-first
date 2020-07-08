import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/NSR.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function NsrDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>NSR certificates are:</h2>
            <div className={classes.row}>
              <div className={classes.column}>
                <img
                  src={image1}
                  alt="Snow"
                  style={{ width: "40%", marginLeft: "200px" }}
                />
              </div>
            </div>
            
          </GridItem>
        </GridContainer>

        <ul className={classes.ul_design} style={{ listStyleType: "none", padding: '20px', marginLeft: "400px" }}>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/AIS_EPIRB_TrainingcertificateNSR16_TC261.pdf"
                  target="_blank"
                >
                  NSR Certificate (No.: NSR16-TC261)
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/TrainingcertificateNSR16_TC261EA.pdf"
                  target="_blank"
                >
                  NSR Certificate (No.: NSR16-TC261EA)
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/TrainingcertificateNSR16_TC261EB.pdf"
                  target="_blank"
                >
                  NSR Certificate (No.: NSR16-TC261EB)
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/VDR_SafetyFirstNSR16_AS262V_1.pdf"
                  target="_blank"
                >
                  NSR Certificate (No.: NSR16-AS262V)
                </a>
              </li>
            </ul>
      </div>
    </div>
  );
}
