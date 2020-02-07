import React, { PureComponent, useState, useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import Typical from 'react-typical';
import Scroll from 'react-scroll';
import '../../css/lightReflection.css';

const useStyles = makeStyles(theme => ({
    introContainer : {
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems:'center',
        display: 'flex',
    },
    intro : {
        width: '100%',
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        color:theme.palette.background.paper,
        flexDirection:'column',
    },
    typical : {
        fontSize: 30,
    },
    buttonDiv : {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor: yellow[500],
        height:100,
    },
    button : {
        height:40,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonSpan : {
        fontSize: 70,
        height:110,
        margin: 10,
    }
}));

function getWindowSize() {
    const [size, setSize] = useState([0,0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

export default function main() {
    const classes = useStyles();
    const scroll = Scroll.animateScroll;
    const [width, height] = getWindowSize();

    function handleClick(e) {
        scroll.scrollTo(height);
    }

    return (
        <div className={classes.introContainer}>
            <div className={classes.intro}>
                <div className={classes.typical}>
                    <Typical
                        steps={[
                            '', 1000,
                            '92년생', 2000,
                            '남자', 1000,
                            '개발자', 4000
                        ]}
                        wrapper="p"
                        //loop={3}
                    />
                </div>
                <div className={classes.buttonDiv}>
                    <div className={classes.buttonSpan}>&#123;</div>
                    <div className={`${classes.button} btn effect01`} onClick={handleClick}>
                        <span>View My Skill</span>
                    </div>
                    <div className={classes.buttonSpan}>&#125;</div>
                </div>
            </div>
        </div>
    )
}