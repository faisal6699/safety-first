import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/Hydrant_1.gif";



// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/services";

const useStyles = makeStyles(styles);

export default function FireHydrantDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section} style={{ padding: "90px" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Hydrant System</h2>
            <h5 className={classes.description}>
              We offer Fire Hydrant system i.e. in compliance with NFPA
              requirements. The Hydrant System comprises of AC motor driven pump
              sets with all required accessories including valves,
              instrumentation and controls etc. The user attaches a hose to the
              fire hydrant, then opens a valve on the hydrant to provide a
              powerful flow of water, on the order of 350 kPa. This user can
              attach this hose to a fire engine, which can use a powerful pump
              to boost the water pressure. Our providing equipments are UL
              listed.
            </h5>
            <h5 className={classes.description}>
              A typical hydrant installation fed directly from water main and
              pressurized by fire pumps is shown as below:
            </h5>
            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
              </div>
              
            </div>
            

            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
