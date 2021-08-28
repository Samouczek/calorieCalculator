import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Container, Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/core/styles';
import CalculatePpm from "../../../logics/CalculatePpm";
import ValidationCalculatePpm from "../../../logics/ValidationCalculatePpm";
import theme from "../../../styles/theme";
import StylePPMForm from "./StylePPMForm";

const gender = [
    {
        value: 0,
        label: 'kobieta',
    },
    {
        value: 1,
        label: 'mężczyzna',
    }
];

export default function PPMForm({getParameters}) {
    const classes = StylePPMForm();
    const [chooseSex, setChooseSex] = React.useState(0);
    const [ppmResult, setPpmResult] = useState(false);
    const [bodyWeight, setBodyWeight] = useState(false);
    const [bodyGrowth, setBodyGrowth] = useState(false);
    const [bodyAge, setBodyAge] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => setChooseSex(event.target.value);

    const handleCLick = (event) => {
        event.preventDefault();
        if (ValidationCalculatePpm(bodyWeight, bodyGrowth, bodyAge) === 0) {
            setPpmResult(CalculatePpm(chooseSex, bodyWeight, bodyGrowth, bodyAge));
            if (typeof getParameters === 'function') {
                getParameters(ppmResult, bodyWeight);
            }
        } else {
            setShowAlert(ValidationCalculatePpm(bodyWeight, bodyGrowth, bodyAge));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom className={classes.header}>
                        Wyliczenie podstawowej przemiany materii PPM
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel id="demo-mutiple-checkbox-label" required>płeć</InputLabel>
                            <Select
                                labelId = "demo-mutiple-checkbox-label"
                                id ="demo-mutiple-checkbox"
                                value = { chooseSex }
                                onChange = { handleChange }
                                input = {<Input />}
                                fullWidth
                            >
                                {gender.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id = "bodyWeight"
                                name = "bodyWeight"
                                label = "masa ciała w kg"
                                fullWidth
                                autoComplete = "given-weight"
                                onChange = { event => setBodyWeight(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id = "bodyGrowth"
                                name = "bodyGrowth"
                                label = "wzrost w cm"
                                fullWidth
                                autoComplete = "given-growth"
                                onChange = { event => setBodyGrowth(event.target.value) }
                            />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id = "age"
                                name = "age"
                                label = "wiek w latach"
                                fullWidth
                                autoComplete = "given-age"
                                onChange = { event => setBodyAge(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} lg={10}>
                            <div className = {classes.root}>{
                                (showAlert)
                                &&
                                <Alert
                                    severity="error"
                                    onClose={() => setShowAlert(null)}
                                >
                                    { showAlert }
                                </Alert>}
                            </div>
                        </Grid>
                        <Grid item  xs={12} sm={4} md={3} lg={2}>
                            <Button
                                fullWidth
                                variant = "contained"
                                color = "primary"
                                className = { classes.button }
                                onClick = { handleCLick }
                            >
                                oblicz PPM
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            { ppmResult &&
                            <Typography variant="h6" gutterBottom className={classes.result}>
                                Twoja podstawowa przemiana materia (PPM) wynosi: <span
                                className = { classes.resultNumber }>
                                    {ppmResult}
                                </span> kalorii.
                            </Typography>}
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}