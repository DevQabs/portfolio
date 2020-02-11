import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../../images/me.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container : {
        width:'100%',
        minWidth: '100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
    },
    image : {
        width: '300px',
        height: 'auto',
    }
})); 

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {/* 사진용 div */}
            <div>
            <img src={me} className={classes.image}/>
            </div>
            <div>
            <Typography>
                <ul>
                    <li>김태국</li>
                    <li>DevQabs@gmail.com</li>
                    <li>2010.02 : 양산 고등학교 졸업</li>
                    <li>2017.02 : 창원 대학교 정보통신공학과 졸업</li>
                    <li>2017.04 : (주) 아토스 입사</li>
                        <li>2017.12 : 현대종합특수강 영업 / 구매 업무 개발</li>
                        <li>2018.12 : 현대종합특수강 품질 업무 유지보수</li>
                        <li>2019.12 : 현대종합특수강 신설공장 품질 업무 개발 및 유지보수</li>
                    <li>2020.01 : (주) 아토스 퇴사</li>
                </ul>
            </Typography>
            </div>
        </div>
    )
}