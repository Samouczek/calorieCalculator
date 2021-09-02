import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {ThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from "../../organisms/Copyright";
import theme from "../../../styles/theme";
import StyleLogin from "./StyleLogin";
import ValidationLogin from "../../../logics/login/ValidationLogin";
import {Alert} from "@material-ui/lab";
import {NavLink} from "react-router-dom";
import {LOG_IN, PROFILE} from "../../../constants/Route";

function Login({userLogIn}) {
    const classes = StyleLogin();
    const [username, setUsername] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (ValidationLogin(username) === 0) {
            if (typeof userLogIn === 'function'){
                userLogIn(username);
            }
        } else {
            setShowAlert(ValidationLogin(username));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"> Zaloguj się </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Imię"
                            name="username"
                            autoFocus
                            onChange={event => setUsername(event.target.value)}
                        />
                        <div className = {classes.root}>{
                            (showAlert)
                            &&
                            <Alert
                                severity={(showAlert === "Produkt został zapisany") ? "success" : "error"}
                                onClose={() => setShowAlert(null)}
                            >
                                { showAlert }
                            </Alert>}
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitLog}
                            onClick={handleSubmit}
                            component={NavLink}
                            to={(username) ? PROFILE : LOG_IN}
                        >
                            Zaloguj
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitCancel}
                            onClick={() => setUsername(false)}
                        >
                            Anuluj
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;