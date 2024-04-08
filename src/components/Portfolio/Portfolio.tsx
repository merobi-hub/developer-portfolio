import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { RouteComponentProps } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import { Navbar } from '../../components';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Project, Projects } from '../../static/projects';

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
        zIndex: 1,
        marginBottom: 75
    },
    container: {},
    card_dims: {
        minWidth: 550,
        minHeight: 550,
        maxWidth: 425,
        marginTop: 75,
        margin: '0 auto',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: '20em'
    },
    col: {
        display: 'flex',
        width: '100%',
    },
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
            <Helmet>
                <title>Robinson | Portfolio</title>
            </Helmet>
                <Navbar />
                    <div className={classes.body}>
                        <div className={classes.main}>
                            <Container className={classes.container}>
                                <ThemeProvider theme={theme}>
                                    <Row>
                                    {Projects.map(project => 
                                        <Col md sm className={classes.col}>
                                            <Card className={classes.card_dims}>                                  
                                                <CardMedia 
                                                    className={classes.media}
                                                    image={project.img_path}
                                                    title="Screenshot of app"
                                                />
                                                <CardContent>
                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                        {project.description_general}
                                                    </Typography>
                                                    <Typography variant="h5" component="h2">
                                                        {project.title}
                                                    </Typography>
                                                    <Typography className={classes.pos} color="textSecondary">
                                                        {project.description_specific}
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {project.tools_1}
                                                        <br />
                                                        {project.tools_2}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    {Object.entries(project.links).map(([key, value]) =>
                                                        <Button size="small" href={value}>{key}</Button>
                                                    )}
                                                </CardActions>
                                            </Card>
                                        </Col>
                                    )}
                                    </Row>
                                </ThemeProvider>
                            </Container>
                        </div>
                    </div>
        </div>
    
    );
}
