import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import { Navbar } from '../../components';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import Typography from '@material-ui/core/Typography';

interface ThanksProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
}

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0',
    },
    main: {
        display: 'flex',
        // flexDirection: 'row',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        position: 'absolute'
    },
    formCardDims: {
        textAlign: 'center',
        width: 325,
        marginTop: 75,
        marginLeft: '35%'
    },
    formTitle: {
        marginBottom: 20
    },
    formSpacing: {
        marginBottom: 10
    },
    thanksMsg: {
        color: 'white',
        textAlign: 'center',
        marginTop: '5vh'

    }
});

const theme = createTheme({
    typography: { 
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
    },
});

export const Thanks = ( props:ThanksProps ) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Helmet>
            <title>Robinson | Thanks</title>
        </Helmet>
            <Navbar />
            <div className={classes.main}>
                <Container>
                    <ThemeProvider theme={theme}>
                        <Row>
                            <Col md sm>
                                <Typography>
                                    <div className={classes.thanksMsg}>
                                        <h5>Thank you very much for your interest. I will respond to your message as soon as possible.</h5>
                                    </div>
                                </Typography>
                            </Col>
                        </Row>
                    </ThemeProvider>
                </Container>
            </div>
        </div>
    )
}
