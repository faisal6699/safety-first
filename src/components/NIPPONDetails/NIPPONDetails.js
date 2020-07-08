import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/NIPPON.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function NIPPONDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>Nippon certificates are:</h2>
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
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/NK_ApprovalLSAFFA_Valid_25_7_2021.pdf"
              target="_blank"
            >
              Nippon Kaiji Kyokai (Certificate No.: 16TZ189)
            </a>
          </li>
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/NK_ApprovalLBT_Valid_25_7_2021.pdf"
              target="_blank"
            >
              Nippon Kaiji Kyokai (Certificate No.: 16TZ190)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
