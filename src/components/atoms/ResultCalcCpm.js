import Typography from "@material-ui/core/Typography";
import React from "react";
import calculateProteinCarboFat from "../../logics/calculateProteinCarboFat";
import StyleResultCalcCpm from "../../style/StyleResultCalcCpm";

export default function ResultCalcCpm({cpmResult, palValue, bodyWeight}){
    const classes = StyleResultCalcCpm();
    const macronutrients = calculateProteinCarboFat(cpmResult, bodyWeight, palValue);

    return <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
            Twoja szacowana całkowita przemiana materia (CPM) wynosi
            <span
                className={classes.resultNumber}>
                {cpmResult}
            </span>
            kalorii.
        </Typography>
        <Typography variant="h6" gutterBottom
                    className={classes.resultNumber}>
            Porady:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Utrzymanie masy ciała: {cpmResult} kcal <br/>
            Sugerowana redukcja masy ciała (-15% - 0):
            {(cpmResult*0.85).toFixed(0)} kcal - {cpmResult}kcal <br/>
            Sugerowana kształtowanie sylwetki (0 - 15%):
            {cpmResult} kcal - {(cpmResult*1.15).toFixed(0)} kcal
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Sugerowany rozkład makroskładników:
        </Typography>
        <Typography >
            białko - {macronutrients[0][0]}g - {macronutrients[0][1]} kcal - {macronutrients[0][2]}% wartości energetycznej diety<br/>
            <em className={classes.comment}>
                (od 0.8g do 2g na 1kg masy ciała, 1g to 4 kcal)
            </em> <br/>
            węglowodany: {macronutrients[1][0]}g - {macronutrients[1][1]} kcal - {macronutrients[1][2]}% wartości energetycznej diety<br/>
            <em className={classes.comment}>
                (od 45% do 65% wartości energetycznej, 1g to 4 kcal)
            </em> <br/>
            tłuszcze: {macronutrients[2][0]}g - {macronutrients[2][1]} kcal - {macronutrients[2][2]}% wartości energetycznej diety<br/>
            <em className={classes.comment}>(od 20% do 35% wartości energetycznej,  1g to 9 kcal)</em> <br/>
        </Typography>
    </div>
}