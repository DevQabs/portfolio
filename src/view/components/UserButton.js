import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scroll from 'react-scroll';

const useStyles = makeStyles(theme => ({
    bottomArrowBtn : {
        position:'absolute',
        bottom:'0px',
    },
    upArrowBtn : {
        position:'absolute',
        top: '50px',
    },
    arrow : {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRight: '2px solid #FFF',
        borderTop: '2px solid #FFF',
        cursor:'pointer',
    },
    arrowBottom : {
        transform: 'rotate(135deg)',
        '&:hover' : {
            transform:'scale(1.2) rotate(135deg)',
        }
    },
    arrowUp : {
        transform: 'rotate(315deg)',
        '&:hover' : {
            transform:'scale(1.2) rotate(315deg)',
        }
    },
})); 

export function UpButton({height}) {
    const classes = useStyles();
    const scroll = Scroll.animateScroll;

    function upBtnClick(e) {
        scroll.scrollTo(-height);
    }

    return (
        <div className={classes.upArrowBtn}>
            <div className={`${classes.arrow} ${classes.arrowUp}`}  onClick={upBtnClick}/>
        </div>
    )
}

export function DownButton({height}) {
    const classes = useStyles();
    const scroll = Scroll.animateScroll;
    
    function downBtnClick(e) {
        scroll.scrollTo(height);
    }

    return (
        <div className={classes.bottomArrowBtn}>
            <div className={`${classes.arrow} ${classes.arrowBottom}`} onClick={downBtnClick}/>
        </div>
    )
}