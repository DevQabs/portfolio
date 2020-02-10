import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container : {
        width:'100%',
        minWidth: '100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
    },
    skill : {
        overflow:'hidden',
        width: 'auto',
        height:'auto',
        color: theme.palette.common.white,
        fontSize: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})); 

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            어바웃 페이지
        </div>
    )
}