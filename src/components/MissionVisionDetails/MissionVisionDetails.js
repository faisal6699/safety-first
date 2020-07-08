import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/logo1.jpg";
import image2 from "../../assets/img/logo2.jpg";
import image3 from "../../assets/img/logo3.jpg";
import image4 from "../../assets/img/logo4.jpg";
import image5 from "../../assets/img/logo5.jpg";
import image6 from "../../assets/img/logo6.jpg";
import image7 from "../../assets/img/logo7.jpg";
import image8 from "../../assets/img/logo8.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function MissionVisionDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Mission</h2>
            <h5 className={classes.description}>
              The mission of “Safety First Pvt.Ltd” & “Equipment Testing &
              Inspection C.Ltd”  is to improve continually on our products and
              services by being the best at meeting our customer’s needs,
              allowing us to prosper as a business while maintaining an
              effective Quality Management System (QMS)
            </h5>

            <h4 className={classes.title}>Quality & Environmental Policy:</h4>
            <h5 className={classes.description}>
              The quality and environment policy at SFPL & EQTICL are to provide
              quality services through a motivated workforce in support of our
              vision and mission, consistent with international standards based
              on safety, security and applicable environmental legislation and
              regulations.
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Vision</h2>
            <h5 className={classes.description}>
              We shall be the benchmark company in servicing Fire Fighting &
              Life Saving Appliances through superior performance, demonstrated
              by quality, timely delivery and customer satisfaction.
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Services: As per NFPA, BS, & EN Standard
            </h2>
            <table style={{ width: "100%" }} className={classes.description}>
              <tr>
                <th>Install:</th>
                <td></td>
                <td>
                  Fire Detection system, Fire Hydrant system, Fixed Co2 system,
                  Sprinkler system, Fixed system & Water Mist system.
                </td>
              </tr>
              <tr>
                <th>Service:</th>
                <td></td>
                <td>
                  Fixed CO2 system, Foam system, Extinguishers, BA Sets &
                  Devices, Liferaft Life Boat. Boiler fine safety system, PLC
                  Control system and servicing generator.
                </td>
              </tr>
              <tr>
                <th>Load Test:</th>
                <td></td>
                <td>All Kinds of Lifting Appliances.</td>
              </tr>
              <tr>
                <th>Calibration:</th>
                <td></td>
                <td>All Kinds of Gas Detectors</td>
              </tr>
              <tr>
                <th>Supply:</th>
                <td></td>
                <td>
                  All LSA & Fire Fighting Equipments, Navigational Equipments &
                  Engs. Spare parts.
                </td>
              </tr>
            </table>
          </GridItem>
        </GridContainer>
      </div>

      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>History</h2>
            <h5 className={classes.description}>
              Rana - Plaza disaster stimulates a safety engineering firm -
              Safety First Ltd, to shade light on nation's largest manufacturing
              RMG sector from a different dimension. With more than 10 years
              experience, it initiates Novelty Engineering to serve from a full
              fledge single business unit - as it seems the industry needs huge
              service engineering to race the international auditing &
              rectification project : Infra - structure build up! They sketch,
              they budge, they execute, they patch up and finally they amend the
              shape of their architecture. It's an innovation, it's a process,
              it's a symbol of development and it's an explosion of Excellency.
              It started direct factory support from the very early of walmart -
              Bureau Veritas movement of safety concern back 2012, and making
              factory infra - structure - international safety standard! Novelty
              already worked for more than 50 factories with a chasing with
              brands / Accord / Alliance.
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      

    
    </div>
  );
}
