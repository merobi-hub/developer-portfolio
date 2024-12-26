import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { RouteComponentProps } from 'react-router-dom';
import karma_typewriter from '../../assets/images/karma_typewriter.webp';
import { Navbar } from '../../components';
import { Col } from 'reactstrap';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, Card } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { init } from 'emailjs-com';
init(process.env.EMAILJS!)


interface ContactProps{
    history: RouteComponentProps['history'], //stores info needed for user navigation of site
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
}

const theme = createTheme({
    typography: { 
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
    },
});

const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: 0,
    },
    main: {
        display: 'flex',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${karma_typewriter});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'fill',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        position: 'absolute'
    },
    submain: {
        margin: '0 auto',
    },
    formCardDims: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        width: 350,
        marginTop: 75,
        [theme.breakpoints.down('sm')]: {
            width: 330,
        },
    },
    formTitle: {
        marginBottom: 20
    },
    formSpacing: {
        marginBottom: 10
    },
    contact_col: {
        display: 'flex'
    },
    input: {
        backgroundColor: 'black',
        color: 'white',
    }
});

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    message: yup.string().required(),
});

type FormData = {
    name: string;
    email: string;
    message: string;
};

export const Contact = ( props:ContactProps ) => {

    const { register, formState: { errors } } = useForm<FormData> ({
        resolver: yupResolver(schema),
    });

    const form: any = useRef();

    // Send the form data via email
    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('service_ofbf6mt', 'template_58ca9cw', form.current, 'PYuvALLMBhd_vI3FU')
            .then(function(response: any) {
            console.log('SUCCESS!', response.text);
            
            // Redirect to home
            props.history.push("/thanks");
            
            }, function(error: any) {
            console.log('FAILED...', error.text);
            });
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Helmet>
            <title>Robinson | Contact</title>
        </Helmet>
            <Navbar />
            <div className={classes.main}>
                <div className={classes.submain}>
                    <ThemeProvider theme={theme}>
                        <div className="justify-content-md-center">
                            <Col md sm className={classes.contact_col}>
                                <Card className={classes.formCardDims}>
                                    <CardContent sx={{ bgcolor: "black", color: "white" }}>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <div className={classes.formTitle}>
                                                <Typography  variant="h4" component="h2">
                                                    Contact
                                                </Typography>
                                            </div>
                                            <div className={classes.formSpacing}>
                                                <Typography  variant="h5" component="h2">
                                                    <label htmlFor="from_name">Name</label>
                                                    <br />
                                                    <input
                                                        className={classes.input}
                                                        id="from_name"
                                                        placeholder="name"
                                                        {...register("name", { required: true, maxLength: 60, pattern: /^[ A-Za-z]+$/i })} 
                                                    /> 
                                                    { errors.name?.message }                                           
                                                </Typography>
                                            </div>
                                            <div className={classes.formSpacing}>
                                                <Typography  variant="h5" component="h2">
                                                    <label htmlFor="from_email">E-mail</label>
                                                    <br />
                                                    <input
                                                        className={classes.input} 
                                                        id="from_email"
                                                        type="email"
                                                        placeholder="e-mail address" 
                                                        {...register("email", { required: true })} 
                                                    />
                                                    { errors.email?.message }
                                                </Typography>
                                            </div>
                                            <div className={classes.formSpacing}>
                                                <Typography  variant="h5" component="h2">
                                                    <label htmlFor="message">Message</label>
                                                    <br />
                                                    <textarea
                                                        className={classes.input}
                                                        id="message"
                                                        placeholder="message"
                                                        {...register("message", { required: true, maxLength: 1500, pattern: /^[ A-Za-z]+$/i })}
                                                    />
                                                    { errors.message?.message }
                                                </Typography>
                                            </div>
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="Submit"                                               
                                            />
                                        </form>
                                    </CardContent>
                                </Card>  
                            </Col>
                        </div>
                    </ThemeProvider>
                </div>
            </div>
            <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
            </script>
            <script type="text/javascript">
                emailjs.init(process.env.EMAILJS!);
            </script>
        </div>
    );
}
