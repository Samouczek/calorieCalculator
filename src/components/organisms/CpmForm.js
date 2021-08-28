import React, {useState} from 'react';
import {Container, Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import ResultCalcCpm from "../atoms/ResultCalcCpm";
import CalculateCpm from "../../logics/CalculateCpm";
import theme from "../../styles/theme";
import StyleCpmFrom from "../../styles/StyleCpmFrom";
import ValidationCalculateCpm from "../../logics/ValidationCalculateCpm";
import {Alert} from "@material-ui/lab";

const values = [1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3];

export default function CPMForm({ ppm, bodyWeight }) {
    const classes = StyleCpmFrom();
    const [ppmValue, setPpmValue] = useState("");
    const [choosePalValue, setChoosePalValue] = useState(false);
    const [cpmResult, setCpmResult] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    (ppm) && setPpmValue(ppm);
    const handleClick = (event) => {
        event.preventDefault();
        if (ValidationCalculateCpm(choosePalValue,ppmValue) === 0){
            setCpmResult(CalculateCpm(choosePalValue,ppmValue));
            console.log(ppmValue);
            console.log(choosePalValue)
        } else {
            setShowAlert(ValidationCalculateCpm(choosePalValue,ppmValue))
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom className={classes.header}>
                        Wyliczenie całkowitej przemiany materii CPM
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} >
                            <InputLabel id="demo-mutiple-checkbox-label" required>
                                PAL
                            </InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                value={choosePalValue}
                                onChange={event =>  setChoosePalValue(event.target.value)}
                                input={<Input />}
                                fullWidth
                            >
                                {values.map((option) => (
                                    <MenuItem key = {option} value = {option}>
                                        {option.toFixed(1)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item  xs={12} sm={4} >
                            <TextField
                                required
                                id="ppm"
                                name="ppm"
                                label="PPM"
                                value={ppmValue}
                                autoComplete = "given-ppmValue"
                                fullWidth
                                onChange = {event => setPpmValue(event.target.value)}
                            />
                        </Grid>
                        <Grid item  xs={12} sm={4}>
                            <Button
                                fullWidth
                                variant = "contained"
                                color = "primary"
                                className = {classes.button}
                                onClick = {handleClick}
                            >
                                oblicz CPM
                            </Button>
                        </Grid>
                        <Grid item  xs={12} sm={8}>
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
                    </Grid>
                    { (cpmResult)
                    &&
                    <ResultCalcCpm
                        cpmResult = {cpmResult}
                        bodyWeight = {bodyWeight}
                        palValue = {choosePalValue}
                    />}
                </div>
            </Container>
        </ThemeProvider>
    );
}