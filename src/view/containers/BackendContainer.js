import React from 'react';
import SkillComponent from '../components/skillComponent';

import java from '../../images/java.png';
import oracle from '../../images/oracle.png';
import spring from '../../images/spring.png';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: '10px',
        overflow: 'hidden',
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

export default function BackendContainer() {    
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