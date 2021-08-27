import React, {useState} from 'react';
import {Container, Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import ResultCalcCpm from "../atoms/ResultCalcCpm";
import calculateCpm from "../../logics/calculateCpm";
import theme from "../../styles/theme";
import StyleCpmFrom from "../../styles/StyleCpmFrom";

const values = [1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3];

export default function CPMForm({ppm, bodyWeight}) {
    const classes = StyleCpmFrom();
    const [ppmValue, setPpmValue] = useState(ppm);
    const [choosePalValue, setChoosePalValue] = useState(false);
    const [cpmResult, setCpmResult] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setCpmResult(calculateCpm(choosePalValue,ppmValue));
        console.log(ppmValue);
        console.log(choosePalValue)
    }

    return (
        <ThemeProvider theme = {theme}>
            <Container component = "main" maxWidth = "lg">
                <div className = {classes.paper}>
                    <Typography variant = "h6" gutterBottom className = {classes.header}>
                        Wyliczenie całkowitej przemiany materii CPM
                    </Typography>
                    <Grid container spacing = {3}>
                        <Grid item xs = {12} sm = {4} >
                            <InputLabel
                                id = "demo-mutiple-checkbox-label"
                                required
                            >
                                PAL
                            </InputLabel>
                            <Select
                                labelId = "demo-mutiple-checkbox-label"
                                id = "demo-mutiple-checkbox"
                                value = {choosePalValue}
                                onChange = {event =>  setChoosePalValue(event.target.value)}
                                input = {<Input />}
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
                                autoComplete = {(ppmValue) && ppmValue}
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
                    </Grid>
                    { (cpmResult)
                    &&
                    <ResultCalcCpm
                        cpmResult = { cpmResult }
                        bodyWeight = { bodyWeight }
                        palValue = { choosePalValue }
                    />}
                </div>
            </Container>
        </ThemeProvider>
    );
}