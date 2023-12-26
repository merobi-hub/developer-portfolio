import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { RouteComponentProps } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import karma_typewriter from '../../assets/images/karma_typewriter.jpg';
import { Navbar } from '../../components';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import weather_screenshot from '../../assets/images/weather_app_screenshot.png';
import car_screenshot from '../../assets/images/car_api.png';
import racer_screenshot from '../../assets/images/racer.png';
import library_screenshot from '../../assets/images/library_scrnshot.png';
import portfolio_screenshot from '../../assets/images/portfolio.png';
import garage_screenshot from '../../assets/images/garage.png';
import roi_screenshot from '../../assets/images/realestate.png';
import blackjack_screenshot from '../../assets/images/blackjack.png';
import atten_screenshot from '../../assets/images/attendance_home.png';
import add_copyright_screenshot from '../../assets/images/add_copyright.png';
import license_updater_screenshot from '../../assets/images/license_updater.png';
import ecosystem_screenshot from '../../assets/images/OL_ecosystem.png';

interface PortfolioProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
}

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
    container: {},
    card_dims: {
        minWidth: 550,
        minHeight: 550,
        maxWidth: 425,
        marginTop: 75,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: '20em'
    }
  });

const theme = createTheme({
    typography: { 
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
    },
  });

export const Portfolio = ( props:PortfolioProps ) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.body}>
                <div className={classes.main}>
                    <Container className={classes.container}>
                        <ThemeProvider theme={theme}>
                        <Row>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={ecosystem_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Landing Page - OSS Contribution
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            OpenLineage Ecosystem Page
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Responsive webpage for displaying integrations 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            React, TypeScript 
                                            <br />
                                            MaterialUI
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/OpenLineage/docs/blob/main/src/pages/ecosystem.tsx">Github</Button>
                                        <Button size="small" href="https://openlineage.io/ecosystem">Website</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={library_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Flask/API Web Application - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Lantern Free Library Online
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            User-generated catalog with data from Google Books API, Blog
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Python, Flask, Bootstrap, Gunicorn, Postgres
                                            <br />
                                            SQLAlchemy, Werkzeug, Google Books API, Great Expectations
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/lantern-library-online">Github</Button>
                                        <Button size="small" href="https://lantern-library-online.herokuapp.com">Heroku</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={portfolio_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React Web Application - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Web Developer Portfolio
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Personal portfolio website with form 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            TypeScript/JavaScript, React, Bootstrap 
                                            <br />
                                            MaterialUI, Emailjs, Firebase
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/portfolio">Github</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={add_copyright_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            OSS Project Utility - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Add Copyright Tool
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Script for adding a copyright to an open-source project 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Python, OS, Sys 
                                            <br />
                                            Bash, Markdown
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/add-copyright">Github</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={license_updater_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            OSS Project Utility - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            License Updater Tool
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Script for updating an open-source project's license 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            Python, OS
                                            <br />
                                            Bash, Markdown
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/license-updater">Github</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                        <CardMedia 
                                                className={classes.media}
                                                image={car_screenshot}
                                                title="Screenshot of app"
                                            />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React Web Application - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Car Inventory
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            User-generated API for collectors 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            TypeScript/JavaScript, Material-UI
                                            <br />
                                            Firebase, Insomnia
                                            <br />
                                            React
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" href="https://github.com/merobi-hub/operators61-week8-car-inventory-react">Github</Button>
                                            <Button size="small" href="https://car-inventory-mr.web.app/">Heroku</Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>                                    
                                        <CardMedia 
                                            className={classes.media}
                                            image={atten_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Python Web App - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Attendance Keeper
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Lightweight attendance tracker with Google login
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            OAuthLib, Python, Flask, SQLAlchemy, Psycopg2 
                                            <br />
                                            Jinja, Bootstrap, WTF, Werkzeug, Login, Flash 
                                            <br />
                                            Datetime, Heroku
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/attendance_tracker">Github</Button>
                                        <Button size="small" href="https://attendance-keeper.herokuapp.com/">Heroku</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}
                                            image={weather_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React Web Application with API - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            Today's Weather
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Searchable weather app
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            JavaScript, Axios, React
                                            <br />
                                            Regex, Firebase
                                            <br />
                                            OpenWeatherMap API
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/operators-week7-weather-api">Github</Button>
                                        <Button size="small" href="https://weather-df750.web.app/">Firebase</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}
                                            image={racer_screenshot}
                                            title="Screenshot of app"
                                        />
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React Web Application with API - Individual Project
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                            F1 Driver Data 
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                            Searchable sports data app
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            JavaScript, Axios
                                            <br />
                                            React, Regex
                                            <br />
                                            Firebase, Ergast Developer API
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/operators-week7-day3-hw">Github</Button>
                                        <Button size="small" href="https://racer-data-b0f20.web.app/">Firebase</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}
                                            image={garage_screenshot}
                                            title="Screenshot of app"
                                        />
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Object-Oriented Program - Individual Project
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        E-commerce Parking Garage
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        Console app that mimics functions of parking-garage software
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                        Python, SQLite3, Datetime 
                                        <br />
                                        Jupyter Notebook
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/operators61-week2-parkingGarage">Github</Button>
                                    </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}
                                            image={roi_screenshot}
                                            title="Screenshot of app"
                                        />
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Object-Oriented Program - Individual Project
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Real Estate ROI Calculator
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        Console app that calculates ROI for real estate investment based on user input
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                        Python
                                        <br />
                                        Jupyter Notebook
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/operators61-week3-ROIcalculator">Github</Button>
                                    </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}
                                            image={blackjack_screenshot}
                                            title="Screenshot of app"
                                        />
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Object-Oriented Program - Individual Project
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Blackjack Game
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        Console blackjack app for 1 player and dealer
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                        Python
                                        <br />
                                        VS Code
                                        <br />
                                        Jupyter Notebook
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href="https://github.com/merobi-hub/operators61-week3-blackjack">Github</Button>
                                    </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Col>
                        </Row>
                        </ThemeProvider>
                    </Container>
                </div>
            </div>
        </div>
    
    );
}

