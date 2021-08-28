import Typography from "@material-ui/core/Typography";
import React from "react";
import StyleResultCalcCpm from "./StyleResultCalcCpm";
import DisplayMacronutrientsInCalcCpm from "../DisplayMacronutrientsInCalcCpm";

export default function ResultCalcCpm({cpmResult, palValue, bodyWeight}){
    const classes = StyleResultCalcCpm();

    return (
        <div className = {classes.root}>
                <Typography variant="h5" gutterBottom>
                    Twoja szacowana całkowita przemiana materia (CPM) wynosi <span
                        className = {classes.resultNumber}>
                        {cpmResult}
                    </span> kalorii.
                </Typography>
                <Typography variant="h6" gutterBottom className = {classes.resultNumber}>
                    Porady:
                </Typography>
                <Typography variant = "subtitle1" gutterBottom>
                    Utrzymanie masy ciała: {cpmResult} kcal <br/>
                    Sugerowana redukcja masy ciała ( -15% - 0 ): {(cpmResult*0.85).toFixed(0)} kcal
                    - { cpmResult } kcal <br/>
                    Sugerowana kształtowanie sylwetki ( 0 - 15% ): {cpmResult} kcal
                    - {(cpmResult * 1.15).toFixed(0)} kcal
                </Typography>
                <Typography variant = "subtitle1" gutterBottom>
                    Sugerowany rozkład makroskładników:
                </Typography>
                <DisplayMacronutrientsInCalcCpm
                    cpmResult = {cpmResult}
                    bodyWeight = {bodyWeight}
                    palValue = {palValue}
                />
        </div>
    );
}