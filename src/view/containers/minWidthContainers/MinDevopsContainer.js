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

export default function MinDevopsContainer() {    
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>Devops</Typography>
            </div>
            <div className={classes.container}>
                <SkillComponent image={jenkins} title="jenkins" subtitle="실무" content="실무 프로젝트 협업에서 통합관리"/>
                <SkillComponent image={svn} title="svn" subtitle="실무" content="실무에 사용하면서 해당 프로젝트 형상관리"/>
                <SkillComponent image={linux} title="linux" subtitle="토이" content="기본 명령어 숙지 및 서버 환경 설정"/>
                <SkillComponent image={git} title="git" subtitle="토이" content="형상 관리에 필요한 기본적인 사용법 숙지"/>
            </div>
        </div>
    )
}