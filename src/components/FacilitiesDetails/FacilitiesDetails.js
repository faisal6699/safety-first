import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image from "../../assets/img/facility.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function FacilitiesDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ marginTop: "20px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={2} >
          <img
              src={image}
              alt="..."
              className={classes.imgRounded}
            />
            
          </GridItem>

          <GridItem xs={12} sm={12} md={8}>
          
            <h2 className={classes.title}>We Supply & Install</h2>

            <ul
              className={classes.ul_design}
              style={{ marginLeft: "30px", listStyleType: "none" }}
            >
              <li className={classes.description}>
                Auto fire detection & Extingushing system
              </li>
              <li className={classes.description}>Fixed CO2 System</li>
              <li className={classes.description}>Fire sprinkler system</li>
              <li className={classes.description}>Fire hydrant system</li>
              <li className={classes.description}>Security alarm system</li>
              <li className={classes.description}>CC TV system</li>
              <li className={classes.description}>Navigational equipment</li>
            </ul>
          </GridItem>
        </GridContainer>
        </div>
        <GridContainer >
          <GridItem xs={12} sm={12} md={12} >
            <h2 className={classes.title}>
              Our service scope as follows as required by accord/alliance
              incompliance of NFPA
            </h2>

            <ul className={classes.ul_design} style={{padding: '50px'}}>
              <li className={classes.description}>
                We supply, design, delivery and install by precise calculation
                required NOS. of detectors, nozzles required for fixed
                installation as required by accord/alliance
              </li>
              <li className={classes.description}>
                We install automatic fire control panel, incorporating manual,
                release station warning sign, alarm bells and discharge sign.
              </li>
              <li className={classes.description}>
                Design, supply, deliver and complete cable works with carbon
                steel pipes and 30 minutes fire resistence cable.
              </li>
              <li className={classes.description}>
                We do install fix hosereel system for manual/automatic fire
                protection with water for all kinds of manufacturing company.
              </li>
              <li className={classes.description}>
                Design, supply, deliver and install pipe lines as required
              </li>
              <li className={classes.description}>
                We do install fire hydrunt/hose for manual/automatic fire with
                water for all kinds of manufacturing company.
              </li>
              <li className={classes.description}>
                We do hydrostatic pressure testing for all kind of fire
                extinguishers, especially CO2 (45KGS) cylinders of fixed fire
                supression systems. Here to mention that, we are fully
                conversent with IMO/SOLAS regulations & local regulations.
              </li>
              <li className={classes.description}>
                We do service, supply all kind of fire extingushers &
                equipments.
              </li>
              <li className={classes.description}>
                We service & do hydrostatic pressure testing of SCBA cylinders,
                EEBD cylinders, supply, delivers all kind of Life Saving
                Appliances.
              </li>
              <li className={classes.description}>
                We service, repair, supply & installed all brand of radar,
                bridge equipments including GMDSS VHF, INMERSET-C, GPS.
              </li>
              <li className={classes.description}>
                We do load test of all type of cranes/derricks and other lifting
                appliance.
              </li>
            </ul>
          </GridItem>
        </GridContainer>
      
    </div>
  );
}
