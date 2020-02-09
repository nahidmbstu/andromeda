import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ReactComponent as Logo } from "../app_landing.svg";

const useStyles = makeStyles(theme => ({
  Main: {
    width: "100vw",
    background: "rgba(255,255,255,0.7)",
    margin: 0,
    padding: 0
  }
}));

export default function MainBanner(props) {
  const classes = useStyles();

  return (
    <div className={classes.Main}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h6'>Andromeda</Typography>
        </Grid>
        <Grid item xs={6}>
          <Logo width={300} height={300} />
        </Grid>
      </Grid>
    </div>
  );
}
