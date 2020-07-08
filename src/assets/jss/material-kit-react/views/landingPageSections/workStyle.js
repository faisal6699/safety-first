import { container,title } from "../../../material-kit-react";

const workStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "0"
  },
  
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
