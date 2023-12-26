import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';
import karma_typewriter from '../../assets/images/karma_typewriter.jpg';
import profile_pic from '../../assets/images/profile_pic.jpg';
import { Navbar } from '../../components';
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
                    <p>Community Manager and Full Stack Developer</p>
                    <a href="https://github.com/merobi-hub" className={classes.links}>
                        <GitHubIcon className={classes.icons} />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-robinson/" className={classes.links}>
                        <LinkedInIcon className={classes.icons} />
                    </a>
                    <a href="mailto:merobi@gmail.com" className={classes.links}>
                        <EmailIcon className={classes.icons}/>
                    </a>
                </div>
            </main>
        </div>
    )
}