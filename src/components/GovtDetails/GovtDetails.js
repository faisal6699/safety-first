import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Govt.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function GovtDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>Government certificates are:</h2>
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
        <ul className={classes.ul_design} style={{ listStyleType: "none", padding: '20px', marginLeft: "300px" }}>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/AIS_EPIRB_MMD_Approval_2017.pdf"
                  target="_blank"
                >
                NOC for Repairing works of Marine Electronics & Navigational equipments
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/LBT_MMD_2017.pdf"
                  target="_blank"
                >
                  Permission for carrying out Inspection & Servicing
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/Lifting_Appliances_MMD_2017.pdf"
                  target="_blank"
                >
                  Approval for carry out Cranes and other Lifting Appliances Load test
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/LRFT_MMD_Approval_tillDec_2017.pdf"
                  target="_blank"
                >
                  Approval of Service Station of Life Saving Appliances
                </a>
              </li>
              <li className={classes.description}>
                <a
                  href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/LSA_FFA_MMD_2017.pdf"
                  target="_blank"
                >
                 NOC for Undertaking FFA and LSA works
                </a>
              </li>
            </ul>
      </div>
    </div>
  );
}
