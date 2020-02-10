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
})); 

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            프로젝트 페이지
        </div>
    )
}