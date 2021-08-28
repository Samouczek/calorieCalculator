import Typography from "@material-ui/core/Typography";
import React from "react";
import CalculateProteinCarboFat from "../../logics/profile/CalculateProteinCarboFat";
import StyleResultCalcCpm from "./resultCalculateCpm/StyleResultCalcCpm";

function DisplayMacronutrientsInCalcCpm({ cpmResult, bodyWeight, palValue }){
    const classes = StyleResultCalcCpm();
    const macronutrients = CalculateProteinCarboFat(cpmResult, bodyWeight, palValue);

    return (
        <Typography >
            <strong>białko</strong>: {macronutrients[0][0]}g - {macronutrients[0][1]} kcal -
            {macronutrients[0][2]}%  wartości energetycznej diety <br/>
            <em className={classes.comment}>
                (od 0.8g do 2g na 1kg masy ciała, 1g to 4 kcal)
            </em> <br/>
            <strong>węglowodany</strong>: {macronutrients[1][0]}g - {macronutrients[1][1]} kcal -
            {macronutrients[1][2]}% wartości energetycznej diety <br/>
            <em className={classes.comment}>
                (od 45% do 65% wartości energetycznej, 1g to 4 kcal)
            </em>
            <br/>
            <strong>tłuszcze</strong>: {macronutrients[2][0]}g - {macronutrients[2][1]} kcal -
            {macronutrients[2][2]}% wartości energetycznej diety<br/>
            <em className={classes.comment}>
                (od 20% do 35% wartości energetycznej,  1g to 9 kcal)
            </em><br/>
        </Typography>
    );
}
export default DisplayMacronutrientsInCalcCpm;