/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, CallMissedSharp } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Buttons";
import App from '../../view/App'
import About from '../../view/pages/About'

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a 
          href="/"
          className={classes.navLink}>
          Home
        </a>
        
      </ListItem>



      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a href= "/About" className={classes.dropdownLink}>
              About Us
            </a>,
         
            <a href="/MissionVision" className={classes.dropdownLink}>
              Mission & Vision statement
            </a>,
            <a href="/Chairman" className={classes.dropdownLink}>
              MD's message
            </a>,
            <a href="/OurProjects" className={classes.dropdownLink}>
              Our Project
            </a>,
            <a href="/Facilities" className={classes.dropdownLink}>
              Our Facility
            </a>,
            <Link to="#" className={classes.dropdownLink}>
              Our Sub ordinaries
            </Link>,

            <a
              href="http://www.sfplbd.com/images/Achievement/Certificate/CTF/LBT_MMD_2017.pdf"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>


      
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Services
        </Button>
      </ListItem>


      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Products"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
              Fire Door Accessories
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
              Fire Fighting Products
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             Marine Products
            </Link>,
          ]}
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Achievement"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
              NSR Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
              GOVERNMENT Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             BUREAU Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             DNV-GL Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             RINA Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             NIPPON Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             GERMANISCHAR Certificates
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
             NINGBO Certificates
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Our Partners
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>

      {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}


     {/* <ListItem className={classes.listItem}>
        
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>*/}
    </List>
  );
}
