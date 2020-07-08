import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image1 from "../../assets/img/ButterflyValve_1.jpg";
import image2 from "../../assets/img/ButterflyValve_2.jpg";
import image3 from "../../assets/img/GateValve_3.jpg";

import image4 from "../../assets/img/AlamCheckVelve_4.jpg";
import image5 from "../../assets/img/_CheckValve_5.jpg";
import image6 from "../../assets/img/_LandingValve_6.jpg";

import image7 from "../../assets/img/_AngleValve_7.jpg";
import image8 from "../../assets/img/_Nozzle_8.jpg";
import image9 from "../../assets/img/_PrussreRelifeValve_9.jpg";

import image10 from "../../assets/img/_FireHydrent_10.jpg";
import image11 from "../../assets/img/_HorsePipe_11.jpg";


import image12 from "../../assets/img/Fire1AddressableFirePanel.jpg";
import image13 from "../../assets/img/Fire2VariousCapacity.jpg";
import image14 from "../../assets/img/Fire3CompactFirePanel.jpg";

import image15 from "../../assets/img/Fire4MultisensorDetector.jpg";
import image16 from "../../assets/img/Fire5HeatDetector.jpg";
import image17 from "../../assets/img/Fire6FireAlamBell.jpg";

import image18 from "../../assets/img/Fire7ManualCallPoint.jpg";
import image19 from "../../assets/img/Fire8MotionDetector.jpg";

import image20 from "../../assets/img/fire1PortableFirePump.jpg";
import image21 from "../../assets/img/fire2MotorFirePump.jpg";
import image22 from "../../assets/img/fire3JockyPump.jpg";

import image23 from "../../assets/img/fire4EngineDrivenFirePump.jpg";
import image24 from "../../assets/img/fire5WaterPump.jpg";
import image25 from "../../assets/img/fire6LargeIndustry.jpg";

import image26 from "../../assets/img/fire7SprinklerHead.jpg";
import image27 from "../../assets/img/fire8FireFightingAccessories.jpg";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/products";

const useStyles = makeStyles(styles);

export default function FireFightingProductsDetails() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Fighting Products</h2>
            <h5 className={classes.description}>
              We supply every fire fighting equipment that are UL listed and FM
              approved. Our supplied products are given below:
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Fighting Equipments</h2>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image1} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>ButterflyValve_1</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image2} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>ButterflyValve_2</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image3} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>GateValve</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image4} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Alarm Check Valve</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image5} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>CheckValve</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image6} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>LandingValve</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image7} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>AngleValve</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image8} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Nozzle</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image9} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Prussre Relife Valve</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image10} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>FireHydrent</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image11} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>HorsePipe</h5>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>




      <div className={classes.section}>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Alarm System</h2>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image12} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>AddressableFirePanel</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image13} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>VariousCapacity</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image14} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>CompactFirePanel</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image15} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Multisensor Detector</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image16} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Heat Detector</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image17} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Fire Alarm Bell</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image18} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Manual Call Point</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image19} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Motion Detector</h5>
              </div>
            </div>

            
          </GridItem>
        </GridContainer>
      </div>


      <div className={classes.section}>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Fire Fighting System</h2>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image20} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Portable Fire Pump</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image21} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Motor Fire Pump</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image22} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Jocky Pump</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image23} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Engine Driven Fire Pump</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image24} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Water Pump</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image25} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Large Industry</h5>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column_large}>
                <img src={image26} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Sprinkler Head</h5>
              </div>
              <div className={classes.column_large}>
                <img src={image27} alt="Snow" style={{ width: "100%" }} />
                <h5 className={classes.description} style={{textAlign: 'center'}}>Fire Fighting Accessories</h5>
              </div>
            </div>

            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
