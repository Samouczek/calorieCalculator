import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../organisms/Copyright";
import theme from "../atoms/theme";
import {ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submitLog: {
        margin: theme.spacing(3, 0, 1),
    },
    submitCancel: {
        margin: theme.spacing(1, 0, 2),
    },
}));

function SignIn() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zaloguj się
                    </Typography>
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitLog}
                        >
                            Zaloguj
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitCancel}
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

export default SignIn;