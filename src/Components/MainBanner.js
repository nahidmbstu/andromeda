import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  Main: {
    height: "100vh",
    width: window.innerWidth,
    background: "rgba(0,0,0,0.3)"
  }
}));

export default function MainBanner(props) {
  const classes = useStyles();

  return (
    <Box height='100%' bgcolor='grey.300' mx={0.5} width={120} display='inline-block'>
      Height 100%
    </Box>
  );
}
