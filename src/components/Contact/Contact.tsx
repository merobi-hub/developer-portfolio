import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
    makeStyles,
    Card
} from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import karma_typewriter from '../../assets/images/karma_typewriter.jpg';
import { Navbar } from '../../components';
import { Container, Row, Col } from 'reactstrap';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { init } from 'emailjs-com';
init("PYuvALLMBhd_vI3FU");


interface ContactProps{
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
});

const theme = createTheme({
    typography: { 
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
    },
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
}

export const Contact = ( props:ContactProps ) => {

    const { register, formState: { errors } } = useForm<FormData> ({
        resolver: yupResolver(schema)
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
            <Navbar />
            <div className={classes.main}>
                <Container>
                    <ThemeProvider theme={theme}>
                        <Row className="justify-content-md-center">
                            <Col md="6" sm="4">
                                <Card className={classes.formCardDims}>
                                    <CardContent>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <Typography className={classes.formTitle} variant="h4" component="h2">
                                                Contact Form
                                            </Typography>
                                            <Typography className={classes.formSpacing} variant="h5" component="h2" color="textSecondary">
                                                <label htmlFor="from_name">Name</label>
                                                <br />
                                                <input
                                                id="from_name"
                                                placeholder="name"
                                                {...register("name", { required: true, maxLength: 60, pattern: /^[ A-Za-z]+$/i })} /> 
                                                { errors.name?.message }                                           
                                            </Typography>
                                            <Typography className={classes.formSpacing} variant="h5" component="h2" color="textSecondary">
                                                <label htmlFor="from_email">E-mail</label>
                                                <br />
                                                <input 
                                                id="from_email"
                                                type="email"
                                                placeholder="e-mail address" 
                                                {...register("email", { required: true })} />
                                                { errors.email?.message }
                                            </Typography>
                                            <Typography className={classes.formSpacing} variant="h5" component="h2" color="textSecondary">
                                                <label htmlFor="message">Message</label>
                                                <br />
                                                <textarea 
                                                id="message"
                                                placeholder="message"
                                                {...register("message", { required: true, maxLength: 1500, pattern: /^[ A-Za-z]+$/i })}/>
                                                { errors.message?.message }
                                            </Typography>
                                            <input
                                                type="submit"
                                                className="btn btn-primary"                                               
                                            />
                                        </form>
                                    </CardContent>
                                </Card>  
                            </Col>
                        </Row>
                    </ThemeProvider>
                </Container>
            </div>
            <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
            </script>
            <script type="text/javascript">
                (function(){
                    emailjs.init("PYuvALLMBhd_vI3FU")
                })();
            </script>
        </div>
    );
}

