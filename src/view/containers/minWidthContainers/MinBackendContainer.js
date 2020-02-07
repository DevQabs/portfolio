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

export default function MinBackendContainer() {    
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>Back-end</Typography>
            </div>
            <div className={classes.container}>
                <SkillComponent image={java} title="Java" subtitle="실무" content="객체지향에 대한 이해 및 코드 작성"/>
                <SkillComponent image={spring} title="Spring" subtitle="실무" content="TDD 방식의 Restful API 웹 개발"/>
                <SkillComponent image={oracle} title="Oracle" subtitle="실무" content="PL/SQL 작성 가능 및 실행계획을 통한 쿼리 분석"/>
            </div>
        </div>
    )
}