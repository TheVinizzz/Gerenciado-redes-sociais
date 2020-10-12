import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {INDEX_ROUTE} from "../../../Routes";
import SplashScreen from "../SplashScreen";

function AdminGuard({ children }) {
    const profile = useSelector(state => state.firebase.profile);

    if(!profile.isLoaded){
        return <SplashScreen/>;
    }

    if(!profile.isAdmin){
        return <Redirect to={INDEX_ROUTE}/>
    }

    return children;
}

AdminGuard.propTypes = {
    children: PropTypes.any
};

export default AdminGuard;
