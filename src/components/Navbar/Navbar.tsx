import { makeStyles } from '@material-ui/core';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
        margin: '0.25em 0',
        textTransform: 'uppercase',
    },
    nav_a: {
        borderRadius: 5,
        margin: '0.25em 0',
        padding: '0 1em',
        "&:hover": {
            background: '#2e2e2e'
        },
    },
    nav_link: {
        color: 'white',
    },
    outer: {
        display: 'flex',
        width: '100%'
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
                                    <NavLink className={classes.nav_link}
                                        href="/"
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} 
                                        href="/portfolio"
                                    >
                                        Portfolio
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link} 
                                        href="/resume"
                                    >
                                        Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.nav_a}>
                                    <NavLink className={classes.nav_link}
                                        href="/contact"
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
