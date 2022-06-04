import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import classes from '*.module.css';
import karma_typewriter from '../../assets/images/karma_typewriter.jpg';
import profile_pic from '../../assets/images/profile_pic.jpg';
import { Link } from 'react-router-dom';
import { relative } from 'path';
import { Navbar } from '../../components';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub.js';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    
    main_text: {
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center center',
        position: 'absolute',
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',

    },
    profile_pic: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '150px',
        width: '150px'
    },
    icons: {
        margin: '25px',
    },
    links: {
        color: 'white'
    }
    
});

export const Home = ( props:Props ) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Navbar />  
            <main className={classes.main}>
                <Avatar alt="Michael Robinson thumbnail pic" className={classes.profile_pic} src={profile_pic}></Avatar>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Full Stack Software and Developer Relations Engineer</p>
                    {/* <Link to="https://twitter.com/prosaicdrmr" className={classes.links}>
                        <TwitterIcon className={classes.icons} />
                    </Link> */}
                    <Link to="https://github.com/merobi-hub" className={classes.links}>
                        <GitHubIcon className={classes.icons} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/michael-robinson/" className={classes.links}>
                        <LinkedInIcon className={classes.icons} />
                    </Link>
                    <a href="mailto:merobi@gmail.com" className={classes.links}>
                        <EmailIcon className={classes.icons}/>
                    </a>
                </div>
            </main>
        </div>
    )
}