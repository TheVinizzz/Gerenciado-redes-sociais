import React from 'react';
import {Box, CircularProgress, makeStyles} from '@material-ui/core';
import LogoImage from "../../assets/navbar/loadingScreen.png";
//import LogoImage from 'src/startup-space-web/ui/pages/assets/image/logo/startup-space.png';
//import LogoVertical from 'src/startup-space-web/assets/logo-vertical.png';
import "./splash.css";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: "#141526",
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000
  },
  logo: {
    width: 480,
    maxWidth: '100%'
  }
}));

function Logo(props) {
const LogoVertical = LogoImage
    return (
        <img
            alt="Logo"
            src= {LogoVertical}
            {...props}
        />
    );
}

function SlashScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        mb={6}
      >
        <Logo className={classes.logo} />
      </Box>
        <CircularProgress color="secondary" />
    </div>
  );
}

export default SlashScreen;
