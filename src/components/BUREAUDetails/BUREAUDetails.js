import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/BUREAU.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function BUREAUDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>BUREAU certificates are:</h2>
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
        <ul
          className={classes.ul_design}
          style={{
            listStyleType: "none",
            padding: "20px",
            marginLeft: "300px",
          }}
        >
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/BV_Approval_FireExtinguishing_FireDetection_27Nov2019.pdf"
              target="_blank"
            >
              Approval Certificate (No. CHGO/SUM/20161201105404)
            </a>
          </li>
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/BV_Approval_SCBA_27Nov2019.pdf"
              target="_blank"
            >
              Approval Certificate (No. CHGO/SUM/20161201110229)
            </a>
          </li>
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/BV%20Approval-Fire%20Extinguishing_Fire%20Detection-27%20Nov-2021.pdf"
              target="_blank"
            >
              Approval Certificate (No. CHGO/SUM/20161201105404)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
