import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    text : {
        fontSize : 25
    },
    image : {
        width: 25,
        height: 25,
    },
    title : {
        fontSize : 15,
    },
    imgContainer : {
        margin: '0px 10px 0px 10px'
    },
    container : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        height: 'auto',
        width: 'auto',
    }, 
    textContainer : {
        display: 'flex',
    }
}));

export default function MinSkillComponent({image, title, subtitle, content}) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={image} className={classes.image}/>
            </div>
            <div className={classes.textContainer}>
                <Typography className={classes.title}>{title} : {content}</Typography>
            </div>
        </div>
    )
}