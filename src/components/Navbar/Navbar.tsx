import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0',
    },
    main: {
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
    },
    nav: {
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none',
        textTransform: 'uppercase',
        // "&:hover": {
        //     background: 'gray'
        // },
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none',
        textTransform: 'uppercase',
        // "&:hover": {
        //     background: 'gray'
        // },
    },
    navbar_container: {
        display: 'flex',
        alignItems: 'right',
        listStyle: 'none',
        font: 'American Typewriter',
    },
    outer: {
        display: 'flex',
        width: '100%'
    },
    nav_div: {
        margin: '0 auto'
    },
});                
            
export const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.outer}>
                    <div className={classes.nav_div}>  
                    <nav>
                        <div className={classes.navbar_container}>
                            <li><Link to="/" className={classes.nav}>Home</Link></li>
                            <li><Link to="/portfolio" className={classes.nav_a}>Portfolio</Link></li>
                            <li><Link to="/resume" className={classes.nav_a}>Resume</Link></li>
                            <li><Link to="/contact" className={classes.nav_a}>Contact</Link></li>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    )
};
