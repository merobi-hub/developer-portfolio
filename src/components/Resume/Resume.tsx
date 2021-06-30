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
        // position: 'fixed',
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
        // flexDirection: 'row',
        //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        width: '100%',
        height: '100%',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'repeat-y',
        // backgroundPosition: 'center',
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
        // fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
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
                                                Full-stack Software Engineer
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
                                                <a href="mailto:merobi@gmail.com" className={classes.contactText}>merobi@gmail.com</a>
                                            </Typography>
                                            <Typography  variant="body2" component="p">
                                                <a href="https://twitter.com/prosaicdrmr" className={classes.contactText}>@prosaicdrmr</a>
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
                                                
                                                <li>Firebase</li>
                                                
                                                <li>Heroku</li>
                                                
                                                <li>Bootstrap</li>
                                                
                                                <li>Material-UI</li> 
                                                
                                                <li>OO Design Patterns</li> 
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
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.skillsCardSpacing} variant="h4" component="h2">
                                                Additional Skills
                                            </Typography>
                                            <Typography className={classes.skillsText} variant="body2" component="p">
                                                <ul>
                                                <li>French</li>
                                                                                                
                                                <li>MS Office</li>
                                                </ul>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                                <Col md sm>
                                    <Card className={classes.experienceCardDims}>
                                        <CardContent>
                                            <Typography className={classes.skillsCardSpacing} variant="h4" component="h2">
                                                Capstone Project
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                <a href="https://lantern-library-online.herokuapp.com/" className={classes.portfolioLink}>Lantern Free Library Online Web App</a>
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <ul>

                                                <li>A user-tailored catalog that makes a little free library’s inventory viewable and modifiable <br/>
                                                online with customized profile routing and a separate blog, all with full CRUD functionality</li>
                                                
                                                <li>Catalog takes in minimal user input and searches the Google Books API to output more <br/>
                                                detailed, complete and standardized output, including images</li> 
                                                
                                                <li>Db operations in catalog and blog performed with SQLAlchemy/PostgreSQL</li> 
                                                
                                                <li>Flask WTF extension handles forms for catalog and blog</li>
                                                
                                                <li>Flask Werkzeug extension secures user passwords</li>
                                                
                                                <li>Flask Login extension and Jinja templates make the nav dynamic</li> 
                                                
                                                <li>Bootstrap and Material-UI cards create a clean, well-organized and inviting interface</li>
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                Capstone Technologies
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Python, Flask, Bootstrap, Werkzeug, Gunicorn, Psycopg2, Heroku, PostgreSQL, URLLib, Regex, Jinja
                                            </Typography>
                                            <Typography className={classes.experienceTitle} variant="h4" component="h2">
                                                Professional Experience
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary">
                                                Full-stack Software Engineer, April 2021-present
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                Coding Temple, Chicago, IL
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <ul>
                                                <li><b>Car Collector API</b>: React, Firebase, Typescript, Material-UI, Heroku</li>
                                                <li><b>Weather App</b>: JavaScript, Axios, Regex, OpenWeatherMap API</li>
                                                <li><b>F1 Racer Data App</b>: JavaScript, Axios, Regex, Ergast Developer API</li>
                                                <li><b>Law Firm Website</b>: React, Typescript, Material-UI, Bootstrap</li>
                                                <li><b>Parking Garage E-comm App</b>: Python, SQLite3, Jupyter Notebook</li>
                                                <li><b>Real Estate ROI Calculator</b>: Python, Jupyter Notebook</li>
                                                <li><b>Blackjack Game</b>: Python, Jupyter Notebook</li>
                                                <li><b>Movie Theater DB ERD</b>: Lucidchart, PostgreSQL, PGAdmin</li>
                                                </ul>
                                            </Typography>
                                            <Typography className={classes.capstoneSpacing} variant="h5" color="textSecondary">
                                                English and Writing Professor/Consultant, 2010-2021
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
                                                Author/Researcher, 2012-present
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                <a href="https://rowman.com/ISBN/9781793607935/The-Queer-Bookishness-of-Romanticism-Ornamental-Community" className={classes.bookLink}>Book</a> 
                                                &nbsp;and <a href="https://lithub.com/great-plagues-always-hit-workers-the-hardest/" className={classes.articlesLink}>articles</a>
                                            </Typography>
                                            <Typography className={classes.experienceTitle} variant="h4" component="h2">
                                                Education
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