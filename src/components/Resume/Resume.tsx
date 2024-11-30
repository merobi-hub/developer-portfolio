import { Container, Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import { Navbar } from '../../components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet';
import resume_pdf from '../../assets/files/Robinson_DevAdv_Resume_web.pdf';
import { FaFileDownload } from "react-icons/fa";

interface ResumeProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
};

const theme = createTheme({
    typography: { 
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
});

const useStyles = makeStyles({
    body: {
        display: 'flex',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        zIndex: 0
    },
    root: {
        padding: '0',
        margin: '0',
    },
    main: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1
    },
    nameCardDims: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '5em',
        marginBottom: '5em',
        width: '16em',
        height: '16em',
        padding: '1.5em',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        }, 
    },
    nameCardSpacing: {
        marginBottom: '0.5em'
    },
    contactCardDims: {
        backgroundColor: 'black',
        marginTop: '5em',
        width: '56em',
        height: '16em',
        padding: '1.5em',
        [theme.breakpoints.down('sm')]: {
            width: '16em !important',
            marginBottom: '5em',
        }, 
    },
    contactText: {
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none'
    },
    contactCardSpacing: {
        marginTop: '2em',
        marginBottom: '0.5em'
    },
    contactCardContent: {
        backgroundColor: 'black',
        color: 'white',
        paddingTop: '3em'
    },
    skillsCardDims: {
        backgroundColor: 'black',
        marginTop: '0em',
        marginBottom: '5em',
        width: '16em',
        minHeight: '50em',
        padding: '1.5em',
    },
    skillsText: {
        color: 'white',
        fontSize: 15,
        marginBottom: '1.5em'
    },
    skillsCardSpacing: {
        marginBottom: '0.5em',
        color: 'white',
    },
    skillsHeader: {
        color: 'white',
    },
    experienceCardDims: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '0em',
        marginBottom: '5em',
        width: '56em',
        minHeight: '50em',
        padding: '1.5em',
        [theme.breakpoints.down('sm')]: {
            width: '16em',
        }, 
    },
    experienceTitle: {
        marginTop: '1em',
        marginBottom: '0.5em'
    },
    capstoneSpacing: {
        marginTop: '1em'
    },
    portfolioLink: {
        color: 'black',
        textDecorationLine: 'none'
    },
    bookLink: {
        color: 'white',
        textDecorationLine: 'none'
    },
    articlesLink: {
        color: 'white',
        textDecorationLine: 'none'
    },
    download_col: {
        display: 'flex'
    },
    download_a: {
        marginTop: '5em',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1.5em 1.5em',
        backgroundColor: '#0d6efd',
        color: 'white',
        border: 'none',
        borderRadius: '0.35em',
        textDecoration: 'none',
        fontFamily: 'Arial, Helvetica, sans-serif',
        '&:hover': {
            backgroundColor: '#0a53be'
        }
    },
    download_icon: {
        color: 'white',
    }
});


export const Resume = ( props:ResumeProps ) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Helmet>
            <title>Robinson | Resume</title>
        </Helmet>
            <Navbar />
            <div className={classes.body}>
                <div className={classes.main}>
                    <Container>
                        <ThemeProvider theme={theme}>
                            <Row>
                                <Col md sm className={classes.download_col}>
                                    <a className={classes.download_a} href={resume_pdf} download="Robinson_resume"><FaFileDownload className={classes.download_icon}/> Download</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col md sm>
                                    <Card className={classes.nameCardDims}>
                                        <CardContent>
                                            <Typography className={classes.nameCardSpacing} variant="h3" component="h2">
                                                Michael Robinson
                                            </Typography>
                                            <Typography className={classes.nameCardSpacing} variant="h5">
                                                Developer Advocate
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                                <Col md sm>
                                    <Card className={classes.contactCardDims}>
                                        <CardContent className={classes.contactCardContent}>
                                            <Typography className={classes.contactCardSpacing} variant="h4" component="h2">
                                                Contact
                                            </Typography>
{/*                                            <Typography variant="body2" component="p">
                                                213.215.1897
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="mailto:merobi@gmail.com" className={classes.contactText}>merobi@gmail.com</a>
                                            </Typography>*/}
                                            <Typography variant="body2" component="p">
                                                <a href="https://www.linkedin.com/in/michael-robinson/" className={classes.contactText}>linkedin.com/in/michael-robinson</a>
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="https://github.com/merobi-hub" className={classes.contactText}>github.com/merobi-hub</a>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md sm>
                                    <Card className={classes.skillsCardDims}>
                                        <CardContent>
                                            <Typography className={classes.skillsCardSpacing} variant="h4" component="h2">
                                                Technical Skills
                                            </Typography>
                                            <Typography className={classes.skillsHeader} variant="h5">
                                                Software Languages
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                <li>CSS3</li>
                                                
                                                <li>HTML5</li>
                                                
                                                <li>Python</li> 
                                                
                                                <li>JavaScript</li> 

                                                <li>TypeScript</li>
                                                
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsHeader} variant="h5">
                                                Frameworks
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                <li>Flask</li>
                                                
                                                <li>React</li>
                                                
                                                <li>Gatsby</li> 
                                                 
                                                <li>Hugo</li>

                                                <li>Docusaurus</li> 
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsHeader} variant="h5">
                                                Design / Infra
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                
                                                <li>OpenLineage</li>
                                                
                                                <li>Marquez</li>
                                                
                                                <li>Airflow</li>
                                                
                                                <li>Firebase</li>
                                                
                                                <li>Heroku</li>
                                                
                                                <li>Git/GitHub</li>
                                                
                                                <li>Docker</li>

                                                <li>Google Cloud</li> 
                                                
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsHeader} variant="h5">
                                                Community
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                    <li>Adobe Illustrator</li>

                                                    <li>Adobe Premiere Pro</li>

                                                    <li>Slack</li>

                                                    <li>Orbit</li>
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsCardSpacing} variant="h4" component="h2">
                                                Additional Skills
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                                                                
                                                    <li>Agile methodology</li>

                                                    <li>Experienced presenter</li>

                                                    <li>Experienced editor</li>

                                                    <li>Experienced teacher</li>

                                                    <li>OS: Windows, Linux, MacOS</li>

                                                    <li>Published author</li>

                                                </ul>                                                
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                                <Col md sm>
                                    <Card className={classes.experienceCardDims}>
                                        <CardContent>
                                            <Typography className={classes.experienceTitle} variant="h4" component="h2">
                                                Experience
                                            </Typography>
                                            <Typography variant="h5">
                                                Astronomer
                                            </Typography>
                                            <Typography variant="h6">
                                                Developer Advocate, May 2024-present
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            <ul>
                                                <li>Author guides, tutorials, and blog posts</li>
                                                <li>Deliver webinars and conference presentations</li>
                                                <li>Answer technical questions in the community</li>
                                                <li>Create videos</li>
                                                <li>DRI for Astro Observe content</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h6">
                                                Community Manager, May 2023-April 2024
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <ul>
                                                <li>Supported <b>222+%</b> growth in the OpenLineage community</li>
                                                <li>Facilitated <b>54%</b> growth in the OpenLineage ecosystem (new partners include Google, Atlan, Manta)</li>
                                                <li>Contribute actively to projects and docs (<b>960+</b> contributions in 2023 alone)</li>
                                                <li>Led process of earning graduation of OpenLineage and Marquez from the LFAI & Data's incubator</li>
                                                <li>Advocate for OpenSource initiatives in conferences and blog posts</li>
                                                <li>Coordinate and lead project community meetings</li>
                                                <li>Serve as release manager for projects</li>
                                                <li>Launched, edit and publish monthly newsletter</li>
                                                <li>Facilitate discussions and answer technical questions in the community</li>
                                                <li>Improve the developer and user experience on projects</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h6">
                                                Software Engineer, Developer Relations, March 2022-May 2023
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            <ul>
                                                <li>Advocate for OpenSource initiatives in conferences and blog posts</li>
                                                <li>Facilitate discussions and answer technical questions in the community</li>
                                                <li>Improve the developer and user experience on projects</li>
                                                <li>Datakin was acquired by Astronomer in March 2022</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5">
                                                Datakin
                                            </Typography>
                                            <Typography variant="h6">
                                                Developer Relations Engineer, November 2021-March 2022
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            <ul>
                                                <li>Advocate for OpenSource initiatives in conferences and blog posts</li>
                                                <li>Facilitate discussions and answer technical questions in the community</li>
                                                <li>Improve the developer and user experience on projects</li>
                                                <li>Datakin was acquired by Astronomer in March 2022</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5">
                                                Universities and Colleges
                                            </Typography>
                                            <Typography variant="h6">
                                                English and Writing Program Admin/Professor/Consultant, 2010-2021
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <ul>
                                                <li><b>Writing Program Administrator/Teaching Professor</b>: USC, L.A., CA</li>
                                                <li><b>Fulbright Humanities Instructor</b>: Bogazici University, Istanbul, Turkey</li>
                                                <li><b>Humanities/Writing Asst. Lecturer</b>: USC Thematic Option Honors Program</li>
                                                <li><b>First-year Writing Lecturer and Adj. Professor</b>: USC Writing Program<br/>
                                                Los Angeles Community College District, L.A., CA<br/>
                                                University of Rhode Island. Kingston, RI</li>
                                                <li><b>English Adj. Professor</b>: California Lutheran University, Thousand Oaks, CA<br/>
                                                University of Massachusetts, Dartmouth</li>  
                                                <li><b>Writing Consultant</b>: Brown University Writing Center</li>
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                Author/Researcher, 2012-2021
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="https://rowman.com/ISBN/9781793607935/The-Queer-Bookishness-of-Romanticism-Ornamental-Community" className={classes.bookLink}>Book</a> 
                                                &nbsp;and <a href="https://lithub.com/great-plagues-always-hit-workers-the-hardest/" className={classes.articlesLink}>articles</a>
                                            </Typography>
                                            <Typography className={classes.experienceTitle} variant="h4" component="h2">
                                                Education
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                Certificate in Python and Web Development (Bootcamp)
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Coding Temple, Chicago, IL (Remote)
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                Certificate in Data Science for Business Strategy
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                University of Virginia Darden School of Business, Arlington, VA
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                Ph.D. in English
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                USC, Los Angeles, CA
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Honors: Andrew M. Mellon grantee, Department dissertation fellow
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                M.A. in English
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                USC, Los Angeles, CA
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5">
                                                B.A. in English, summa cum laude
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                University of Florida, Gainesville, FL
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Honors: summa cum laude, sigma tau delta, Bright Futures Scholar
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                            </Row>
                        </ThemeProvider>
                    </Container>
                </div>
            </div>
        </div>
    )
}
