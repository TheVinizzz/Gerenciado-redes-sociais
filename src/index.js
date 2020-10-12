import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from 'src/web-user/store';
import './index.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import App from "./web-user/App";

import firebase from "src/web-user/firebase/firebase";
import { createFirestoreInstance } from 'redux-firestore'
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import FirebaseInit from "./web-user/ui/components/FirebaseInit";
import 'moment/locale/pt-br';
import DateFnsUtils from '@date-io/date-fns';
import WebFont from "webfontloader"
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
const store = configureStore();

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

WebFont.load({
    google: {
        families: ['Sansita Swashed', 'sans-serif']
    }
});

ReactDOM.render(

    (<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <FirebaseInit>
                    <App/>
                </FirebaseInit>
            </ReactReduxFirebaseProvider>
        </Provider>
    </MuiPickersUtilsProvider>),

    document.getElementById('root')
);

