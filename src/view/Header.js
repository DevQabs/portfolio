import React, { useState, useLayoutEffect, useEffect } from 'react';
import { makeStyles, Typography, Button, useScrollTrigger } from '@material-ui/core';
import { grey, blueGrey, red } from "@material-ui/core/colors";
import logo from '../images/logo.png';
import '../css/font.css';
import '../css/smallHeader.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Scroll from 'react-scroll';
import * as utilScroll from '../utils/Scroll';

const fontTheme = createMuiTheme({
    typography: {
        fontFamily:"'Noto Serif', serif",
    }
});

const userStyles = makeStyles(theme => ({
    headContainer : {
        alignItems:'center',
        display:'flex',
        height: 100,
        width: '100%',
        userSelect: 'none',
    },
    logoContainer : {
        width: 80,
        height: 80,
        marginLeft: `${theme.spacing(2)}px`,
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
    },
    img : {
        width: 50,
        height: 50,
        cursor: "pointer",
    },
    skillContainer : {
        width: 80,
        height: 80,
        marginLeft: `${theme.spacing(2)}px`,
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
        position: 'relative',
    },
    spanTypo : {
        position:'relative',
        cursor: "pointer",
        color:theme.palette.background.paper,
        '&:hover' : {
            '& $marked' : {
                opacity: 1
            },
        },
    },
    marked : {
        height: 3,
        width: '150%',
        backgroundColor: blueGrey[500],
        position: 'absolute',
        bottom: -4,
        left: 'calc(-25%)',
        opacity: 0,
        transition: theme.transitions.create('opacity')
    },
    aboutMeContainer : {
        width: 80,
        height: 80,
        marginLeft: `${theme.spacing(2)}px`,
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
    },
    projectContainer : {
        width: 80,
        height: 80,
        marginLeft: `${theme.spacing(2)}px`,
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
    },
    studyContainer : {
        width: 80,
        height: 80,
        marginLeft: `${theme.spacing(2)}px`,
        alignItems:'center',
        justifyContent: 'center',
        display:'flex',
    }
}));

function openNav() {
    document.getElementById("slideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("slideNav").style.width = "0";
}

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

export default function Headers(props) {
    const classes = userStyles();
    const [width, height] = useWindowSize();
    const [smallHeader, setSmallHeader] = useState(false);
    const scroll = Scroll.animateScroll;

    window.onscroll = (() => {
        let scrollY = window.scrollY;

        if (scrollY >= 10) {
            setSmallHeader(true);
        } else {
            setSmallHeader(false);
        }
    });

    function introClick() {
        scroll.scrollTo(0);
    }

    function skillClick() {
        scroll.scrollTo(height);
    }

    function projectClick() {
        scroll.scrollTo(height * 2);
    }

    function studyClick() {
        scroll.scrollTo(height * 3);
    }

    function aboutClick() {
        scroll.scrollTo(height * 4);
    }

    if (smallHeader) {
        return (
            <MuiThemeProvider theme={fontTheme}>
                <div className='smallHeader'>
                    <div className="smallHeaderLogo">
                        <img src={logo} className='smallLogo' onClick={introClick}/>
                    </div>
                    <div className="smallMenu">
                        <Button variant="outlined" onClick={openNav}>
                            {'< Menu />'}
                        </Button>

                        <div className="slideNav" id="slideNav">
                            <p className="closeBtn" onClick={closeNav}>&times;</p>
                            <p onClick={introClick}>Intro</p>
                            <p onClick={skillClick}>Skill</p>
                            <p onClick={projectClick}>Project</p>
                            {/*<p onClick={studyClick}>Study</p>*/}
                            <p onClick={aboutClick}>About</p>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    } else {
        return (
            <MuiThemeProvider theme={fontTheme}>
            <div className={classes.headContainer}>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.img} onClick={introClick}/>
                </div>
                <div className={classes.skillContainer}>
                    <Typography
                    component="span"
                    variant="h6"
                    className={classes.spanTypo}
                    onClick={skillClick}>
                    Skill
                    <span className={classes.marked}/>
                    </Typography>
                </div>
                <div className={classes.projectContainer}>
                    <Typography
                    component="span"
                    variant="h6"
                    className={classes.spanTypo}
                    onClick={projectClick}>
                    Poject
                    <span className={classes.marked}/>
                    </Typography>
                </div>
                {/* 
                <div className={classes.studyContainer}>
                    <Typography
                    component="span"
                    variant="h6"
                    className={classes.spanTypo}
                    onClick={studyClick}>
                    Study
                    <span className={classes.marked}/>
                    </Typography>
                </div>
                */}
                <div className={classes.aboutMeContainer}>
                    <Typography
                    component="span"
                    variant="h6"
                    className={classes.spanTypo}
                    onClick={aboutClick}>
                    About
                    <span className={classes.marked}/>
                    </Typography>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}