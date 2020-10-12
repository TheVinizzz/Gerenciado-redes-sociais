import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Logo from "../../../../assets/navbar/logo.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { logout } from "src/web-user/actions/accountActions";
import { useSelector } from "react-redux";

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#FFF',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    demo2: {
        backgroundColor: '#141526',
        display: "flex",
        justifyContent: "space-around"
    },
}));

export default function CustomizedTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const uid = useSelector((state) => state.firebase?.auth?.uid);

    const anchorRef = React.useRef(null);
    const userProfile = useSelector((state) => state.firebase.profile);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target))
            return;
    };

    const handleLogout = async (event) => {
        await logout();
        handleClose(event);
    };

    return (
        <div className={classes.root}>
            <div>
                <Container className={classes.demo2}>
                    <a href="/">
                    <img src={Logo} className="h-10 mt-1 md:h-auto md:mt-0"/>
                    </a>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" className="md:ml-50">
                        <StyledTab label="Como Usar" href="/"/>
                        {!uid ? <StyledTab label="Login" href="/entrar"/> : null}
                        {!uid ? <StyledTab label="Registrar" href="/cadastro"/> : null}
                        {uid ? <StyledTab label="Sair" onClick={handleLogout}/> : null}
                    </StyledTabs>
                </Container>
                <Typography className={classes.padding} />
            </div>
        </div>
    );
}