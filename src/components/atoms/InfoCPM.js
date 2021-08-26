import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from "../atoms/theme";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.dark,
        textAlign:"center",
    },
    pos: {
        marginBottom: 12,
    },
    formula: {
        color: theme.palette.common.black,
        textAlign: 'center',
    },
    textFormula: {
        color: theme.palette.primary.dark,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    componentsFormula: {
        textAlign:"center",
    }

});

export default function InfoCPM() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2" className={classes.title} >
                    Całkowita przemiana materii (CPM)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <p style={{textAlign: 'justify'}}><strong>Całkowita przemiana materii (CPM)</strong> (<em>ang.
                                total daily energy expenditure – TDEE</em>) –  suma wszystkich wydatków energetycznych
                                człowieka, które ponosi podczas aktywności fizycznej w ciągu jednego dnia.</p>
                            <p>Całkwitą przemianę materii można obliczyć posługując się uproszczonym wzorem.</p>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <p className={classes.formula}>CPM = PPM × PAL</p>
                            <p className={classes.componentsFormula}> <strong color={theme.palette.primary.dark}>PPM</strong>
                                – podstawowa przemiana materii, którą możesz <br/>
                                obliczyć ze wzoru Harrisa i Benedicta<br/>
                                <strong color={theme.palette.primary.dark}>PAL</strong> – współczynnik aktywności fizycznej, który możesz <br/>
                                oszacować na podstawie ankiety</p>
                            </Grid>
                    </Grid>
                </Typography>

            </CardContent>
        </Card>
    );
}
