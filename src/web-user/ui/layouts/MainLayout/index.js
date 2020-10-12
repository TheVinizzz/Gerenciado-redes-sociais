import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Navbarr from "./components/navbar"
import Footer from "./components/footer"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
      flexDirection: "column"
  },
    navbar: {
        backgroundColor: "#141526",
        width: "100%",
        color: "#FFF"
    },
    listMenu: {
        float: "right"
    },
    listElement: {
      marginLeft: 20,
    }
}));

export default function MainLayout({ children }){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navbar}>
                <Navbarr className={classes.listMenu}/>
            </div>
            <div>
                {children}
            </div>
            <div className="w-">
                <Footer />
            </div>
        </div>
    );
}
