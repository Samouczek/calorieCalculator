import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles({
    root:{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),

    },
    resultNumber: {
        color:  theme.palette.primary.dark,
    },
    comment: {
        color: theme.palette.text.secondary,
        fontSize: '0.85rem',
    }
});

export default function ResultCalcCpm({cpmResult}){
    const classes = useStyles();

    return <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
            Twoja szacowana całkowita przemiana materia (CPM) wynosi <span className={classes.resultNumber}>
                                    {cpmResult} </span> kalorii.
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.resultNumber}>
            Porady:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Utrzymanie masy ciała: {cpmResult} kcal <br/>
            Sugerowana redukcja masy ciała (-15% - 0): {(cpmResult*0.85).toFixed(0)} - {cpmResult} <br/>
            Sugerowana kształtowanie sylwetki (0 - 15%): {cpmResult} - {(cpmResult*1.15).toFixed(2)}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Sugerowany rozkład makroskładników:
        </Typography>
        <Typography >
            białko: <br/>
            <em className={classes.comment}>(od 0.8g do 2g na 1kg masy ciała, 1g to 4 kcal)</em> <br/>
            węglowodany: <br/>
            <em className={classes.comment}>(od 45% do 65% wartości energetycznej, 1g to 4 kcal)</em> <br/>
            tłuszcze: <br/>
            <em className={classes.comment}>(od 20% do 35% wartości energetycznej,  1g to 9 kcal)</em> <br/>
        </Typography>
    </div>
}