import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Germanischer.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/certificates";

const useStyles = makeStyles(styles);

export default function GermanischerDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>Germanischer certificates are:</h2>
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
              href="http://www.sfplbd.com/images/Achievement/Certificate/c-copy/ISO%20CERTIFICATE.pdf"
              target="_blank"
            >
              GL System Crtification (CN: QS 7215 HH)
            </a>
          </li>
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/c-copy/GL-SCBA.pdf"
              target="_blank"
            >
              Approval Certificate (CN: 43 245 - 02 HH)
            </a>
          </li>

          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/c-copy/GL-%20Fire%20Extinguihing%20System%202012-2017.pdf"
              target="_blank"
            >
             Germanischer Certificate (CN: 45 344 - 07 HH)
            </a>
          </li>
          <li className={classes.description}>
            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/c-copy/VL-BNWAS%20%20CERT%2031jAN-2012%20D.pdf"
              target="_blank"
            >
              Type Approval Certificate (CN: 20 182 - 11 HH)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
