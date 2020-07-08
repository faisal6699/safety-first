import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Buttons.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactMe() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Please Fill the Following to Send Mail
            </h2>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />
                <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary">Send Message</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>

      <table style={{  width: "100%" }}>
        <tr>
          <th
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Head Office
          </th>
          <th
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Dhaka Office
          </th>
          <th
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Khulna Office
          </th>
          <th
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
              padding: "8px",
            }}
          >
            Servicing Station
          </th>
        </tr>
        <tr>
          <td style={{ height: '50px', verticalAlign: 'top', border: '2px solid black' }}>
            <h5 className={classes.description}>
              Hasna Tower (4th Floor), 1110/A Agrabad, C/A, Chittagong,
              Bangladesh.
            </h5>
            <h5 className={classes.description}>
              <strong>Tel: </strong> +88 031-2528170
            </h5>
            <h5 className={classes.description}>
              <strong>Fax: </strong> +88 031-710443
            </h5>
            <h5 className={classes.description}>
              <strong>Mobile: </strong>+88 - 01715070546,
            </h5>
            <h5 style={{ marginLeft: '60px' }} className={classes.description}>
               +88 - 01678401100
            </h5>
            <h5 className={classes.description}>
              <strong>Email: </strong> capt@safetyfirstbd.com
            </h5>
            <h5 style={{ marginLeft: '50px' }} className={classes.description}>
               capt.safetfirst@hotmail.com
            </h5>
            <h5 style={{ marginLeft: '50px' }} className={classes.description}>
               marine-safety@hotmail.com
            </h5>
          </td>
          <td style={{ height: '50px', verticalAlign: 'top',  border: '2px solid black'   }}>
            <h5 className={classes.description}>
              House # 434 (Ground Floor), Lane # 07, Baridhara-DOHS, Dhaka-1206
            </h5>
            <h5 className={classes.description}>
              <strong>Mobile: </strong>+88 - 01716099186,
            </h5>
            <h5 style={{ marginLeft: '60px' }} className={classes.description}>
              <strong> </strong> +88 - 01678401107
            </h5>
            <h5 className={classes.description}>
              <strong>Email: </strong> info@safetyfirstbd.com
            </h5>
          </td>
          <td style={{ height: '50px', verticalAlign: 'top',  border: '2px solid black'  }}>
            <h5 className={classes.description}>
              Jiban Bima Bhaban (1st Floor), 46 KDA Avenue, Khulna, Bangladesh
            </h5>
            <h5 className={classes.description}>
              <strong>Mobile: </strong>+88 - 01972065633
            </h5>
            <h5 className={classes.description}>
              <strong>Email: </strong>safetyfirstkhulna@gmail.com
            </h5>
          </td>
          <td style={{ height: '50px', verticalAlign: 'top',  border: '2px solid black'  }}>
            <h5 className={classes.description}>
              <strong>Fire Extinguisher Servicing Station: </strong> 825, South
              Pahartali, Firoz Shah Colony, Chittagong, Bangladesh.
            </h5>
            <h5 className={classes.description}>
              <strong>Life Saving Equipment Servicing Station</strong>106, Amir
              Hossain Dobash Lane, Panir Tank West Madarbari, Chittagong,
              Bangladesh.
            </h5>
          </td>
        </tr>
      </table>
    </div>
  );
}
