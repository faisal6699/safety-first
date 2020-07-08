import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Welcome to Safety First (Pvt.) Ltd.</h2>
          <h5 className={classes.description}>
          Our Company is formed on January 2005 as to provide quality services 
          in the fields of safety security & fire fighting by a group of 
          professionals and to meet the upgrowing demands of 
          reliable services and better facilites 
          (I.E introduction of FM-200, NOVAC-1230 water lessfiresupression 
          systems which have far reaching advantages over other system widely 
          use for sensitive equipments etc.) for marine fields as well as shore based establishments.
        
          We have achieved ISO 9001-2008 Certificate on 14th Aug 2012.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Estimation"
              description="Cost estimation for the firefighting for the projects & helping the entrepreneurs to choose the best with cost effectives."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Aproach"
              description="Study of the premises & the activities, & selection of the appropriate systems for the projects/ establishment."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Final touch"
              description="Service & test, all equipment & installation of the whole fire-fighting system & services, to the satisfaction of the principal/client."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
