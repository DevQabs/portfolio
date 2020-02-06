//src/component/App.js
import React from 'react';
import Header from './view/Header';
import Intro from './view/Body/Intro';
import Skill from './view/Body/Skill';

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    app : {
        width: '100%',
        // height: 2100,
    },
    firstPage : {
        width: '100%',
        height: '100vh',
        backgroundColor:grey[900],
    },
    head: {
        position: 'fixed',
        width: '100%',
        zIndex: 100,
    },
    Intro : {
        width: '100%',
        height: '100vh',
        zIndex: 1,
    },
    Skill : {

    },
})); 

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
        <CssBaseline/>
            <div className={classes.firstPage}>
                <div className={classes.head}>
                    <Header/>
                </div>
                <div className={classes.Intro}>
                    <Intro/>
                </div>
                <div className={classes.Skill}>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}
