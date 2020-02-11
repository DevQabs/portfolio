import React, { useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../components/ProjectCard';
import {UpButton, DownButton} from '../components/UserButton';
import spring from '../../images/spring.png';
import react from '../../images/react.png';
import AOS from 'aos';

const useStyles = makeStyles(theme => ({
    root : {
        width:'100%',
        height:'100vh',
        overflow:'hidden',
        backgroundColor:'skyblue'
    },
    title : {
        fontSize: 50,
        color:theme.palette.common.white,
        position: 'relative',
        top: 50,
        padding:'50px 0px 0px 50px',
    },
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'80vh',
        width:'100%',
    },
    upBtnDiv : {
        position: 'absolute',
        top: '50px',
    }
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

export default function About() {
    AOS.init();

    const classes = useStyles();
    const [width, height] = getWindowSize();

    return (
        <div className={classes.root}
                data-aos="fade-up"
                data-aos-offset='-300'
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
            <div className={classes.title}>
                Project
            </div>
            <div className={classes.container}>
                <UpButton height={height}/><DownButton height={height*3}/>
                <ProjectCard img={spring} title="스프링 게시판" content="spring 활용한 게시판"/>
                <ProjectCard img={react} title="web 그림판" content="react 활용한 그림판"/>
            </div>
        </div>

    )
}