import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Buttons.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            We understand the service, customer care, professionalism, timely
            delivery, quality and balanced price/ performance ratio
            differentiates us from our competitors.
          </h4>
            <h2 className={classes.title}>Quick Contact</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              
                <table style={{width:"100%"}}>
                  <tr>
                    <th>Phone</th>
                    <th>:</th>
                    <th>+880 31 252 8170</th>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <th>:</th>
                    <th>+880 171 507 0546</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>+880 175 988 2200</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>+880 167 840 1100</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>+880 181 938 2527</th>
                  </tr>
                </table>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              <table style={{width:"100%"}}>
                  <tr>
                    <th>Email</th>
                    <th>:</th>
                    <th>capt.safetfirst@hotmail.com</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>capt@sfplbd.com</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>admin@sfplbd.com</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>captzahedi@sfplbd.com</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>info@sfplbd.com</th>
                  </tr>
                </table>
              </GridItem>

            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
