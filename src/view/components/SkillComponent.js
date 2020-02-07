import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    text : {
        fontSize : 25
    },
    image : {
        width: 50,
        height: 50,
    },
    title : {
        fontSize : 20,
    },
    subtitle : {
        fontSize : 11,
    },
    content : {
        fontSize : 12,
    },
    imgContainer : {
        margin: '0px 10px 0px 10px'
    },
    container : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    titleContainer : {
        display: 'flex',
    },
    textContainer : {

    }
}));

export default function SkillComponent({image, title, subtitle, content}) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={image} className={classes.image}/>
            </div>
            <div className={classes.textContainer}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.subtitle}>&nbsp;&nbsp;{subtitle}</Typography>
                </div>
                <Typography className={classes.content}>{content}</Typography>
            </div>
        </div>
    );
}