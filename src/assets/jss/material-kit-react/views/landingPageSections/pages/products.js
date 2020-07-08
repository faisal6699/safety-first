import { container, title } from '../../../../material-kit-react';

import imagesStyles from "../../../../material-kit-react/imagesStyles";

const servicesStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    paddingTop: "70px",
    
  },
  description: {
    color: "#3C4858", 
    
  },
  ul_design: {
    paddingLeft: '200px'
  },
  row: {
    display: 'flex'
  },
  column: {
    float: 'center',
    width: '50%',
    padding: '5px'
  },
  column_large: {
    float: 'center',
    width: '100%',
    padding: '15px'
  },
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "0"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  ...imagesStyles
};

export default servicesStyle;