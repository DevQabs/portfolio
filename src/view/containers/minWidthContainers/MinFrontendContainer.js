import React from 'react';
import SkillComponent from '../../components/skillComponent';

import backend from '../../../images/backend.png';
import css from '../../../images/css.png';
import frontend from '../../../images/frontend.png';
import git from '../../../images/git.png';
import html from '../../../images/html.png';
import java from '../../../images/java.png';
import javascript from '../../../images/javascript.png';
import jenkins from '../../../images/jenkins.png';
import linux from '../../../images/linux.png';
import logo from '../../../images/logo.png';
import oracle from '../../../images/oracle.png';
import react from '../../../images/react.png';
import spring from '../../../images/spring.png';
import svn from '../../../images/svn.png';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: '10px',
        width: '400px',
        height: '400px',
    },
    image : {
        width: 50,
        height: 50,
    },
    titleContainer : {
        display: 'flex',
    },
    title : {
        fontSize : 40,
    },
    subtitle : {
        fontSize : 20,
    }
}));

export default function MinFrontendContainer() {    
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>Front-end</Typography>
            </div>
            <div className={classes.container}>
                <SkillComponent image={html} title="Html" subtitle="실무" content="태그를 활용한 마크업"/>
                <SkillComponent image={css} title="Css" subtitle="실무" content="화면 퍼블리싱"/>
                <SkillComponent image={javascript} title="Javascript" subtitle="실무" content="기본 코딩 및 ES6 문법 활용"/>
                <SkillComponent image={react} title="React" subtitle="토이" content="Redux를 통한 전체 상태관리 및 api 통신"/>
            </div>
        </div>
    )
}