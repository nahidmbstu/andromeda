import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { palette, spacing, typography } from "@material-ui/system";
import React from "react";
import styled from "styled-components";
import "./App.css";
import PrimaryAppBar from "./Components/Appbar";

const Box = styled.div`${palette}${spacing}${typography}`;
// or import Box from '@material-ui/core/Box';

const theme = createMuiTheme();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <PrimaryAppBar />
      <Toolbar />
      <Container>
        <Box color='primary.main' bgcolor='background.paper' fontFamily='h6.fontFamily' fontSize={{ xs: "h6.fontSize", sm: "h4.fontSize", md: "h3.fontSize" }} p={{ xs: 2, sm: 3, md: 4 }}>
          @material-ui/system
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
