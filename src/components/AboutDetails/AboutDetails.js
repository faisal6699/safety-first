import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/logo1.jpg"
import image2 from "../../assets/img/logo2.jpg"
import image3 from "../../assets/img/logo3.jpg"
import image4 from "../../assets/img/logo4.jpg"
import image5 from "../../assets/img/logo5.jpg"
import image6 from "../../assets/img/logo6.jpg"
import image7 from "../../assets/img/logo7.jpg"
import image8 from "../../assets/img/logo8.jpg"



// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function AboutDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              Effective fire-fighting requires proper understanding &
              utilization of fire & firefighting appliances with respective to
              the kind & premises of the fire; as such it involves the use of
              strategy, personnel, and apparatus to extinguish or to escape from
              fire. In order to fulfill this principle requirement, we undertake
              the following responsibilities, in compliance with the
              regulations, to the satisfaction of the customer: Our Standard
              Match to NFPA-12, FM, BS and EN.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
      <ul className={classes.ul_design}>
        <li className={classes.description}>
          Automatic fire detection & extinguishing system
        </li>
        <li className={classes.description}>
          Fixed CO2 system; as per NFPA -12
        </li>
        <li className={classes.description}>Fire sprinkler system</li>
        <li className={classes.description}>Fire hydrant & sprinkler system</li>
        <li className={classes.description}>Security alarm system</li>
        <li className={classes.description}>IFixed foam system</li>
        <li className={classes.description}>
          Supply & service of all kinds of extinguisher & auxiliary equipments
        </li>
        <li className={classes.description}>
          Hydrostatic pressure testing of all kinds of fire extinguishers & CO2
          cylinders
        </li>
        <li className={classes.description}>
          Fixed hose reel system for manual / automatic fire protection with
          water for fixed establishment
        </li>
        <li className={classes.description}>
          Complete cable works with carbon steel pipes/ conduits having 30
          minutes fire resistance capacity
        </li>
        <li className={classes.description}>
          Pipelines for all kinds of fire extinguisher agents/ medium
        </li>
        <li className={classes.description}>
          Automatic fire control panel with manual release provisions;
          incorporating waning sign, alarm bells , & discharge sign{" "}
        </li>
        <li className={classes.description}>
          Assess & work out the nos. of detectors & nozzles required by law for
          fixed installation
        </li>
        <li className={classes.description}>
          We not only design, supply & install the equipments & installations;
          we also carry out annual/ periodical inspection & servicing of the
          same as required by the protocol.
        </li>
        <li className={classes.description}>
          We Supply, Install Fire Doors as required By Accord & Alliances.
        </li>
        <li className={classes.description}>
          Moreover we give our clients different theoretical knowledge on fire
          hazard.
        </li>
      </ul>

      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              Everyone should know that for a fire to occur there must be
              available oxygen, a supply of fuel, and enough heat to kindle the
              fuel – this is known as triangle of fire. Therefore, the three
              basic ways of extinguishing fire are to smother it, to cut off the
              fuel supply, or to cool it below the flammability temperature.
              Fires are classified into four types:
            </h5>
          </GridItem>
        </GridContainer>
      </div>

      <ul className={classes.ul_design}>
        <li className={classes.description}>
          Those in solids, e.g., wood, paper, and cloth etc (A)
        </li>
        <li className={classes.description}>
          Those in flammable liquids, e.g., gasoline, alcohol, oils, lacquers,
          and paints etc (B)
        </li>
        <li className={classes.description}>
          Those in electrical apparatus (C); and
        </li>
        <li className={classes.description}>
          Those in flammable metals such as magnesium (D).
        </li>
      </ul>

      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Recognition</h2>
            <h5 className={classes.description}>
              This is great honor and prestigious for us that we got support
              from different recognized organization in the world. They
              certified us to do all fire protection related jobs. They monitor
              our work throughout the year.
            </h5>
            <div className={classes.row}>
  <div className={classes.column}>
  <img src={image1} alt="Snow" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image2} alt="Forest" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image3} alt="Mountains" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image4} alt="Snow" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image5} alt="Forest" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image6} alt="Mountains" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image7} alt="Snow" style={{width:"100%"}} />
  </div>
  <div className={classes.column}>
  <img src={image8} alt="Forest" style={{width:"100%"}} />
  </div>
  
</div>
            
          </GridItem>
        </GridContainer>
      </div>


  
    </div>
  );
}
