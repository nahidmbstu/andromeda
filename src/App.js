import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import PrimaryAppBar from "./Components/Appbar";
import MainBanner from "./Components/MainBanner";

const theme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <PrimaryAppBar />
      <div className={classes.root}>
        <MainBanner />
      </div>
    </React.Fragment>
  );
}

export default App;
