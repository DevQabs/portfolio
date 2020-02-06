import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../css/font.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import { blue, red, purple } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';

const fontTheme = createMuiTheme({
    typography: {
        fontFamily:"'Noto Serif', serif",
    }
});

const useStyles = makeStyles(theme => ({
    tailContainer : {
        width: '100%',
        height: 300,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        color:theme.palette.background.paper,
    },
    avatarMail : {
        width: 50,
        height: 50,
        backgroundColor: red[500],
        marginBottom: 10,
    },
    avatarLinkedIn : {
        width: 50,
        height: 50,
        backgroundColor: blue[500],
        marginBottom: 10,
    },
    avatarGitHub : {
        width: 50,
        height: 50,
        backgroundColor: purple[500],
        marginBottom: 10,
    },
    icon : {
        width: 30,
        height: 30,
    },
    tailTitle : {
        width: '100%',
        height: 50,
        display:'flex',
        justifyContent: 'center',
        alignItems:'flex-end',
    },
    tailCards : {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: 250,
        width: '100%',
    },
    tailCard : {
        width: 200,
        height: 170,
        margin:5,
        borderRadius: 10,
        backgroundColor: '#292929',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.24)',
        border: '2px solid rgba(7, 7, 7, 0.12)',
        position: 'relative',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        cursor: 'pointer',
        letterSpacing:2,
        transitionDuration:300,
        '&:hover' : {
            height: 190,
            '& $text' : {
                opacity: 1,
            }
        },
    },
    text : {
        transitionDuration:300,
        opacity: 0,
    }
}));

export default function Tail() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={fontTheme}>
            <div className={classes.tailContainer}>
                <div className={classes.tailTitle}>
                    <Typography variant="h4">
                        GET IN TOUCH
                    </Typography>
                </div>
                <div className={classes.tailCards}>
                    <div className={classes.tailCard}>
                        <Avatar className={classes.avatarMail}>
                            <MailIcon className={classes.icon}/>
                        </Avatar>
                        <Typography variant="subtitle1">
                            Mail
                        </Typography>
                        <Typography variant="inherit" className={classes.text}>
                            Good
                        </Typography>
                    </div>
                    <div className={classes.tailCard}>
                        <Avatar className={classes.avatarLinkedIn}>
                            <LinkedInIcon className={classes.icon}/>
                        </Avatar>
                        <Typography variant="subtitle1">
                            LinkedIn
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                            Day
                        </Typography>
                    </div>
                    <div className={classes.tailCard}>
                        <Avatar className={classes.avatarGitHub}>
                            <GitHubIcon className={classes.icon}/>
                        </Avatar>
                        <Typography variant="subtitle1">
                            GitHub
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                            Commander
                        </Typography>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    )
}