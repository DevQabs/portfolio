import React, { useEffect, useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scroll from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/skill.css';
import BackendContainer from '../containers/BackendContainer';
import FrontendContainer from '../containers/FrontendContainer';
import DevopsContainer from '../containers/DevopsContainer';

import MinBackendContainer from '../containers/minWidthContainers/MinBackendContainer';
import MinFrontendContainer from '../containers/minWidthContainers/MinFrontendContainer';
import MinDevopsContainer from '../containers/minWidthContainers/MinDevopsContainer';

const useStyles = makeStyles(theme => ({
    container : {
        width:'100%',
        minWidth: '100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B38',
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
    SkillText : {
        overflow:'hidden',
        width: 'auto',
        display: 'flex',
        padding: '0px 100px 0px 0px'
    },
    skillFlexContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillColumnContainer : {
        display: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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

// size 구하기
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
    const [width, height] = getWindowSize();
    const scroll = Scroll.animateScroll;

    function handleClick(e) {
        scroll.scrollTo(-height);
    }
    function bottomClick(e) {
        scroll.scrollTo(height*2);
    }

    if (onScroll().getScrollY() >= (height/10)) {
        if (width >= 1250) {
            return (
                <div className={classes.container}
                        data-aos="fade-up"
                        data-aos-offset="-300"
                        data-aos-delay="0"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <div className={classes.skill}>
                            <div className={classes.SkillText}>
                                Skill
                            </div>
                            <div className={classes.skillFlexContainer} 
                                data-aos="fade-up" 
                                data-aos-delay="900"
                                data-aos-once="true">
                                <FrontendContainer/>
                                <BackendContainer/>
                                <DevopsContainer/>
                            </div>

                            {/* 화살표 Div */}
                            <div className={classes.upArrowBtn}>
                                <div className={`${classes.arrow} ${classes.arrowUp}`}  onClick={handleClick}/>
                            </div>
                            <div className={classes.bottomArrowBtn}>
                                <div className={`${classes.arrow} ${classes.arrowBottom}`} onClick={bottomClick}/>
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
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <div className={classes.skill}>
                            <div className={classes.SkillText}>
                                Skill
                            </div>
                            <div className={classes.skillColumnContainer} 
                                data-aos="fade-up" 
                                data-aos-delay="900">
                                <MinFrontendContainer/>
                                <MinBackendContainer/>
                                <MinDevopsContainer/>
                            </div>

                            {/* 화살표 Div */}
                            <div className={classes.upArrowBtn}>
                                <div className={`${classes.arrow} ${classes.arrowUp}`}  onClick={handleClick}/>
                            </div>
                            <div className={classes.bottomArrowBtn}>
                                <div className={`${classes.arrow} ${classes.arrowBottom}`} onClick={bottomClick}/>
                            </div>
                        </div>
                </div>
            )
        }
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