import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import { RouteComponentProps } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import { Navbar } from '../../components';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Projects } from '../../static/projects';
import { useState } from "react";

interface PortfolioProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match'],
}

const theme = createTheme({
    typography: { 
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
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
        zIndex: 0,
        margin: 0,
        padding: 0,
    },
    root: {
        padding: '0',
        margin: '0',
    },
    main: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        marginBottom: 150
    },
    main_container: {
        width: '100',
    },
    card_dims: {
        minWidth: 550,
        minHeight: 550,
        marginTop: 75,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            minWidth: 300,
            minHeight: 'auto',
        },
    },
    title: {
        color: 'white',
        fontSize: 14,
        borderWidth: '0px 0px 1px 0px', 
        borderStyle: 'solid',
        borderColor: 'light gray',
    },
    pos: {
        color: '#9E9E9E',
        marginBottom: 12,
    },
    media: {
        height: '20em',
        [theme.breakpoints.down('sm')]: {
            height: '12em',
        },
    },
    col: {
        display: 'flex',
        width: '100%',
    },
    buttons_row: {
        width: '100%',
        display: 'flex',
    },
    buttons_div: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 75,
    },
    buttons: {
        padding: '1em 1em',
    },
    main_row: {
        width: '100%',
    },
});

export const Portfolio = ( props:PortfolioProps ) => {
    const classes = useStyles();
    const [items, setItems] = useState(Projects);
    const projectCategories = [...new Set(Projects.map((Val) => Val.category))];
    const [cat, setCat] = useState<string>('');
    const filterItem = (currCat: any) => {
        const selection = Projects.filter((val) => {
            setCat(currCat);
            return val.category === currCat;
        });
        currCat === "all" ? setItems(Projects) : setItems(selection);
    };
    const Buttons = ({ filterItem }: any) => {
        return (
            <div>
                <>
                    {projectCategories.map((val: any) => {
                        return (
                            <Button
                                key={val}
                                sx={ val === cat ? { 
                                    color: "white", 
                                    padding: "2px 4px", 
                                    margin: "16px 16px", 
                                    borderColor: "white", 
                                    fontWeight: "bold" 
                                } : { 
                                    color: "white", 
                                    padding: "2px 4px", 
                                    margin: "16px 16px", "&:hover": {
                                        borderColor: 'gray'
                                    }, 
                                }}
                                onClick={() => filterItem(val)}
                                size="small"
                                variant="outlined"
                            >
                            {val}
                            </Button>
                        );
                    })}
                    <Button
                        key={'all_button'}
                        sx={ Projects.length === items.length ? { 
                            color: "white", 
                            padding: "2px 4px", 
                            margin: "16px 16px", 
                            borderColor: "white", 
                            fontWeight: "bold" 
                        } : { 
                            color: "white", 
                            padding: "2px 4px", 
                            margin: "16px 16px", "&:hover": {
                                borderColor: 'gray'
                            }, 
                        }}
                        onClick={() => filterItem("all")}
                        size="small"
                        variant="outlined"
                    >
                    ALL
                    </Button>
                </>
            </div>
        );
    };
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Robinson | Portfolio</title>
            </Helmet>
            <Navbar />
            <div className={classes.body}>
                <div className={classes.main}>
                    <Container className={classes.main_container}>
                        <ThemeProvider theme={theme}>
                            <Row className={classes.buttons_row}>
                                <Col md sm  className={classes.buttons_div}>
                                    <Buttons filterItem={filterItem} />
                                </Col>
                            </Row>
                            <Row className={classes.main_row}>
                                <>
                                    {items.map(project => 
                                        <Col key={project.id} className={classes.col}>
                                            <Card
                                                className={classes.card_dims}
                                                sx={{ bgcolor: "black", color: "white" }}
                                            >                                  
                                                <CardMedia 
                                                    className={classes.media}
                                                    image={project.img_path}
                                                    title="Screenshot of app"
                                                />
                                                <CardContent>
                                                    <Typography className={classes.title} gutterBottom>
                                                        {project.description_general}
                                                    </Typography>
                                                    <Typography variant="h5" component="h2">
                                                        {project.title}
                                                    </Typography>
                                                    <Typography className={classes.pos}>
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
                                                        <Button 
                                                            key={value}
                                                            sx={{ 
                                                                color: "white",
                                                                "&:hover": {
                                                                    background: '#2e2e2e'
                                                                }, 
                                                            }} 
                                                            size="small" 
                                                            href={value}
                                                        >
                                                        {key}
                                                        </Button>
                                                    )}
                                                </CardActions>
                                            </Card>
                                        </Col>
                                    )}
                                </>
                            </Row>                            
                        </ThemeProvider>
                    </Container>
                </div>
            </div>
        </div>
    );
}
