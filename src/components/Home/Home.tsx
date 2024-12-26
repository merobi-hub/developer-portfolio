import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import profile_pic from '../../assets/images/li_profile_pic.jpg';
import neg_profile_pic from '../../assets/images/li_profile_pic_negative.jpg';
import { Navbar } from '../../components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub.js';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'reactstrap';
import Avatar from '@mui/material/Avatar';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: 0,
    },
    main_text: {
        color: 'white',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
    },
    main_text_links: {
        margin: '0 auto',
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        position: 'absolute',
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
    },
    text_outer: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        top: '47%' 
    },
    links_outer: {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: '57%',
    },
    profile_pic: {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '&:hover': {
            filter: 'drop-shadow(3px 3px 2px #FFFFFF)' 
        },
    },
    icons: {
        margin: '25px',
        fontSize: '150%',
    },
    links: {
        color: '#FFFFFF',
        '&:hover': {
            color: '#525252'
        }
    },
});

export const Home = ( props:Props ) => {
    const classes = useStyles();
    const [pic, setPic] = useState(profile_pic);
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Robinson | Home</title>
            </Helmet>
            {/*<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
            <Navbar />
                <main className={classes.main}>
                    <Row>
                        <Col className={'w-100%'}>
                        <div className={classes.profile_pic}>
                            <Avatar 
                                alt="Michael Robinson thumbnail pic" 
                                src={pic} 
                                // classes={classes.profile_pic}
                                sx={{ 
                                    width: 150, 
                                    height: 150,
                                    position: 'absolute',
                                    top: '35%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    '&:hover': {
                                        filter: 'drop-shadow(3px 3px 2px #FFFFFF)' 
                                    },
                                }}
                                onMouseEnter={() => setPic(neg_profile_pic)} 
                                onMouseLeave={() => setPic(profile_pic)}>
                            </Avatar>
                        </div>
                        </Col>
                    </Row>
                    <div className={classes.text_outer}>
                        <div className={classes.main_text}>
                            <h1>{ props.title }</h1>
                            <p>Developer Advocate and Technical Community Manager</p>
                        </div>
                    </div>
                    <div className={classes.links_outer}>
                        <div className={classes.main_text_links}>
                            <Row>
                                <Col>
                                    <a href="https://github.com/merobi-hub" className={classes.links}>
                                        <GitHubIcon className={classes.icons} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/michael-robinson/" className={classes.links}>
                                        <LinkedInIcon className={classes.icons} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:merobi@gmail.com" className={classes.links}>
                                        <EmailIcon className={classes.icons}/>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </main>
        </div>
    )
}
