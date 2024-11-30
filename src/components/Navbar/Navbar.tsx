import { makeStyles } from '@material-ui/core';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({});
const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        padding: '0',
        margin: '0',
    },
    main: {
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
    },
    nav: {
        backgroundColor: 'black',
        borderRadius: 5,
        margin: '0.75em 0.75em',
        textTransform: 'uppercase',
    },
    nav_a: {
        borderRadius: 5,
        margin: '0.15em 0.5em',
        padding: '0.5em 1em',
        "&:hover": {
            background: '#2e2e2e'
        },
    },
    nav_link: {
        color: 'white',
        textDecoration: 'None',
    },
    active_link: {
        color: 'white',
        textDecoration: 'None',
    },
    outer: {
        display: 'flex',
        width: '100%',
    },
    nav_div: {
        margin: '0 auto',
        font: 'American Typewriter',
    },
});                
            
export const Navbar = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <div className={classes.main}>
                    <div className={classes.outer}>
                        <div className={classes.nav_div}>
                            <Nav
                                className={classes.nav} 
                                vertical={theme.breakpoints.down('sm')}
                            >
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} activeClassName={classes.active_link}
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} activeClassName={classes.active_link}
                                        to="/portfolio"
                                    >
                                        Portfolio

                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} activeClassName={classes.active_link}
                                        to="/resume"
                                    >
                                        Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} activeClassName={classes.active_link}
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
};
