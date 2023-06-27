import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import karma_typewriter from '../../assets/images/karma_typewriter.jpg';
import { Navbar } from '../../components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


interface ResumeProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
};

const useStyles = makeStyles({
    body: {
        display: 'flex',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
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
        marginTop: '5em',
        marginBottom: '5em',
        width: '16em',
        height: '16em',
        padding: '1.5em'
    },
    nameCardSpacing: {
        marginBottom: '0.5em'
    },
    contactCardDims: {
        marginTop: '5em',
        minWidth: '56em',
        height: '16em',
        padding: '1.5em'
    },
    contactText: {
        color: 'black',
        textDecoration: 'none'
    },
    contactCardSpacing: {
        marginTop: '2em',
        marginBottom: '0.5em'
    },
    skillsCardDims: {
        marginTop: '0em',
        marginBottom: '5em',
        width: '16em',
        minHeight: '50em',
        padding: '1.5em'
    },
    skillsText: {
        fontSize: 15,
        marginBottom: '1.5em'
    },
    skillsCardSpacing: {
        marginBottom: '0.5em'
    },
    experienceCardDims: {
        marginTop: '0em',
        marginBottom: '5em',
        minWidth: '56em',
        minHeight: '50em',
        padding: '1.5em' 
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
        color: 'black',
        textDecorationLine: 'none'
    },
    articlesLink: {
        color: 'black',
        textDecorationLine: 'none'
    }
});

const theme = createMuiTheme({
    typography: { 
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
  });

export const Resume = ( props:ResumeProps ) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}>
                <div className={classes.main}>
                    <Container>
                        <ThemeProvider theme={theme}>
                            <Row>
                                <Col md sm>
                                    <Card className={classes.nameCardDims}>
                                        <CardContent>
                                            <Typography className={classes.nameCardSpacing} variant="h3" component="h2">
                                                Michael Robinson
                                            </Typography>
                                            <Typography className={classes.nameCardSpacing} variant="h5" color="textSecondary">
                                                Community Manager
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                                <Col md sm>
                                    <Card className={classes.contactCardDims}>
                                        <CardContent >
                                            <Typography className={classes.contactCardSpacing} variant="h4" component="h2">
                                                Contact
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                213.215.1897
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="mailto:michael.robinson@astronomer.io" className={classes.contactText}>michael.robinson@astronomer.io</a>
                                            </Typography>
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
                                            <Typography variant="h5" color="textSecondary">
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
                                            <Typography variant="h5" color="textSecondary">
                                                Frameworks
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                <li>Flask</li>
                                                
                                                <li>React</li>
                                                
                                                <li>Axios</li> 
                                                 
                                                <li>Node.js</li> 
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Design / Infra
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                
                                                <li>OpenLineage</li>
                                                
                                                <li>Marquez</li>
                                                
                                                <li>Airflow</li>
                                                
                                                <li>Firebase</li>
                                                
                                                <li>Heroku</li>
                                                
                                                <li>Bootstrap</li>
                                                
                                                <li>Material-UI</li> 
                                                
                                                <li>OO Design Patterns</li> 

                                                <li>VS Code</li>

                                                <li>Git</li>

                                                <li>Github</li>

                                                <li>Google Cloud</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Database
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                <li>SQL</li>
                                                
                                                <li>PostgreSQL</li>
                                                
                                                <li>PGAdmin</li> 
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Data
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                 
                                                <li>R</li> 
                                                <li>R Studio</li>
                                                
                                                <li>Tableau</li>
                                                
                                                <li>Numpy</li> 

                                                <li>Jupyter Notebook</li>

                                                <li>Preset</li>
                                                <li>dbt</li>
                                                <li>Datakin</li>
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsCardSpacing} variant="h4" component="h2">
                                                Additional Skills
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                                                                
                                                <li>MS Office</li>

                                                <li>Adobe Suite</li>

                                                <li>OS: Windows, Linux</li>

                                                <li>WordPress, WiX</li>

                                                <li>LMS: Blackboard, Blackbaud, Google Classroom, Sakai, Brightspace</li>

                                                <li>PeopleSoft</li>
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
                                            <Typography variant="h5" color="textSecondary">
                                                Astronomer
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                Community Manager, May 2023-present
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                Software Engineer, Developer Relations, March 2022-May 2023
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <ul>
                                                <li>Advocate for OpenSource initiatives in conferences and blog posts</li>
                                                <li>Coordinate and lead open-source project community meetings</li>
                                                <li>Serve as release manager for open-source projects</li>
                                                <li>Co-edit monthly Airflow newsletter</li>
                                                <li>Contribute to project source code and documentation</li>
                                                <li>Facilitate discussions and answer technical questions in the community</li>
                                                <li>Improve the developer and user experience on projects</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Datakin
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                Developer Relations Engineer, November 2021-March 2022
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            <ul>
                                                <li>Advocate for OpenSource initiatives in conferences and blog posts</li>
                                                <li>Facilitate discussions and answer technical questions in the community</li>
                                                <li>Improve the developer and user experience on projects</li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Universities and Colleges
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
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
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                Author/Researcher, 2012-2021
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="https://rowman.com/ISBN/9781793607935/The-Queer-Bookishness-of-Romanticism-Ornamental-Community" className={classes.bookLink}>Book</a> 
                                                &nbsp;and <a href="https://lithub.com/great-plagues-always-hit-workers-the-hardest/" className={classes.articlesLink}>articles</a>
                                            </Typography>
                                            <Typography className={classes.experienceTitle} variant="h4" component="h2">
                                                Education
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                Certificate in Python and Web Development (Bootcamp)
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Coding Temple, Chicago, IL (Remote)
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                Certificate in Data Science for Business Strategy
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                University of Virginia Darden School of Business, Arlington, VA
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                Ph.D. in English
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                USC, Los Angeles, CA
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Honors: Andrew M. Mellon grantee, Department dissertation fellow
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                M.A. in English
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                USC, Los Angeles, CA
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
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