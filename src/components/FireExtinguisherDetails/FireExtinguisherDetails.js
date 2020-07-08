import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image from "../../assets/img/fire_1.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function FacilitiesDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ marginTop: "20px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={3}>
            <img src={image} alt="..." className={classes.imgRounded} />
          </GridItem>

          <GridItem xs={12} sm={12} md={8} style={{ marginLeft: "60px" }}>
            <h2 className={classes.title}>Fire Extinguisher System</h2>
            <h5 className={classes.description} style={{ marginTop: "30px" }}>
              We offer a wide range of fire extinguishers that comprise
              following types:
            </h5>
            <ol className={classes.ul_design}>
              <li className={classes.description}>
                A B C" Stored pressure type: Our ABC fire extinguisher is useful
                for fires of A, B and C types. The blanketing effect of
                extinguishers helps in decomposing fire rapidly.
              </li>
              <li className={classes.description}>
                CO2 type fire extinguishers: We supply CO2 fire extinguishers
                that are used for class B and C fires. Our CO2 type
                extinguishers are able to extinguish fire by blanketing dilution
                of oxygen and cooling effects.
              </li>
              <li className={classes.description}>
                Dry chemical powder type fire extinguishers: Our trolley mounted
                dry chemical powder fire extinguisher is used in controlling
                class B and C fires. These extinguish fire by displacement of
                air, beating and decomposition of dry powder effects.
              </li>
              <li className={classes.description}>
                Mechanical foam (AFFF): We supply mechanical foam fire
                extinguisher that is used for class A and B fires. It also cools
                down the container and contents.
              </li>
            </ol>
          </GridItem>
        </GridContainer>
      </div>
      
    </div>
  );
}
