import React, { useEffect, useState, useLayoutEffect } from 'react';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red, blue, grey, yellow, blueGrey } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/skill.css';

const useStyles = makeStyles(theme => ({
    container : {
        width:'100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B38',
    },
    skill : {
        width: 1400,
        minWidth: 800,
        top:110,
        botton:0,
        height:'calc(100% - 200px)',
        color: theme.palette.common.white,
        // backgroundColor:red[50],
        fontSize: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        skillText: ''
    },
})); 

// size 구하기
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

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

function onScroll() {
    const [scrollY, setScrollY]  = useState(0);

    window.addEventListener('scroll', (() => {
        setScrollY(window.scrollY);
    }));

    return {
        getScrollY : function() {
            return scrollY;
        }
    }    
}

export default function Skill(props) {
    AOS.init();

    const classes = useStyles();
    const [width, height] = useWindowSize();

    if (onScroll().getScrollY() >= (height/2)) {
        return (
            <div className={classes.container}
                    data-aos="fade-up"
                    data-aos-offset="-300"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className={classes.skill}>
                        <div className="skillText">
                            Skill
                        </div>
                    </div>
            </div>
        );
    } else {
        return (
            <div className={classes.container}
                    data-aos="fade-up"
                    data-aos-offset="-300"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
            </div>
        );
    }
}