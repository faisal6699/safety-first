import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import image from "../../assets/img/Chairman_Pic.jpg";


// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/pages/about";

const useStyles = makeStyles(styles);

export default function ChairmanDetails() {
  const classes = useStyles();
  return (
    <div>       
     <div className={classes.section} style={{marginTop: '20px'}}>
            
            <GridContainer justify='center' >
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />

            <h4 className={classes.title}>Managing Director : Brgds / Capt. M. Haque</h4>
            </GridItem>
            </GridContainer>
            
            
          
     

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Managing Director’s Message</h2>
            <h5 className={classes.description}>
              Nothing is valuable than saving a human life. We work for the
              <strong>safety & security</strong> for those who Are working for us i.e. in the
              factory & in the ship floating in water. Business is the way of
              life but we count the human life above all & relentlessly trying
              to improve our quality of services by training, educating
              ourselves with the latest development in this field. We have
              started our Journey about a decade ago in pursuant to help
              seafarers to make their work places safe & sound ,now we have
              expanded our services to shore establishments as well. We also
              value the importance of competition, market economy and individual
              responsibility will remain with us for as long as we live. But
              what is important is to see common solutions to common problems.
              We must therefore invest more in our people, in their jobs and in
              their future; and that is exactly what <strong>Safety first Ltd</strong> has been
              doing for the last <strong>10years</strong>. Here we compete for every work
              opportunity to fine- tune our skills, to earn goodwill amongst our
              customers/ partners and to make a lasting relationship. Providing
              world class services and advancing the development of Bangladesh
              is a key objective of <strong>SFPL & EQTICL</strong>. We ensure the commitment and
              professionalism of our workforce in serving the customers, thereby
              keeping us at the forefront as a quality service provider. Judging
              by the orders we have received in the past, we expect this higher
              trend to continue. Meeting expectations of the customers is a
              great incentive. We shall leave no stone unturned to improve and
              develop continually. We understand that service, customer care,
              professionalism, timely delivery, quality and balanced price/
              performance ratio differentiates us from our competitors. Safety
              First &Equipment Testing, thanks its valued customers and well
              wishers for putting their trust and being with us both during our
              bad and good times. I would like to conclude by quoting Dr. David
              M. Burns:<strong><em> “Aim for success, not perfection. Never give up your
              right to be wrong, because then you will loose the ability to
              learn new things and move forward with your life.”</em></strong>
            </h5>

            
          </GridItem>
        </GridContainer>
      </div>

      

      

      
    </div>
  );
}
