import React from 'react';
import MinSkillComponent from '../../components/minWIdthComponents/MinSkillComponent';

import git from '../../../images/git.png';
import jenkins from '../../../images/jenkins.png';
import linux from '../../../images/linux.png';
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
        height: '200px',
    },
    image : {
        width: 50,
        height: 50,
    },
    titleContainer : {
        display: 'flex',
    },
    title : {
        fontSize : 25,
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
                <MinSkillComponent image={jenkins} title="jenkins" subtitle="실무" content="실무 프로젝트 협업에서 통합관리"/>
                <MinSkillComponent image={svn} title="svn" subtitle="실무" content="실무에 사용하면서 해당 프로젝트 형상관리"/>
                <MinSkillComponent image={linux} title="linux" subtitle="토이" content="기본 명령어 숙지 및 서버 환경 설정"/>
                <MinSkillComponent image={git} title="git" subtitle="토이" content="형상 관리에 필요한 기본적인 사용법 숙지"/>
            </div>
        </div>
    )
}