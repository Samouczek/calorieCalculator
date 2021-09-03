import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import StyleInfoPPM from "./StyleInfoPPM";

export default function InfoPPM() {
    const classes = StyleInfoPPM();

    return (
        <Card className = {classes.root}>
            <CardContent>
                <Typography variant = "h6" component = "h2" className={classes.title}>
                    Pdstawowa przemiana materii (PPM)
                </Typography>
                <Typography className = {classes.pos} color = "textSecondary">
                    <Grid container spacing = {2}>
                        <Grid item sm = {12} md = {7}>
                                <p style = {{textAlign: 'justify'}}>
                                    <strong> Podstawowa przemiana materii (PPM) </strong>
                                    <em> (ang. Basal metabolic rate - BMR) </em>
                                    – najmniejsze tempo przemiany materii, zachodzącej w organizmie człowieka,
                                    niezbędne do podtrzymania podstawowych funkcji życiowych, znajdującego się
                                    w stanie czuwania, w warunkach zupełnego spokoju fizycznego i psychicznego,
                                    komfortu cieplnego, który na 12 godzin przed badaniem nie spożywał żadnych posiłków,
                                    po 3 dniach diety bezbiałkowej i po co najmniej 8 godzinach snu.
                                </p>
                                <p>
                                    Podstawową przemianę materii można obliczyć m. in. wg
                                    <strong> wzoru Harrisa-Benedicta </strong>
                                    .
                                </p>
                        </Grid>
                        <Grid item sm={12} md={5}>
                            <p className = {classes.textFormula}>Dla kobiet wzór przyjmuje postać:</p>
                            <p className = {classes.formula}>
                                655,1 + (9,563 × M) + (1,85 × W) − (4,676 × L)
                            </p>
                            <p className = {classes.textFormula}>Dla mężczyzn natomiast:</p>
                            <p className={classes.formula}>
                                66,47 + (13,75 × M) + (5,0 × W) − (6,76 × L)
                            </p>
                            <p className={classes.componentsFormula}>
                                M – masa ciała w kilogramach
                                <br/>
                                W – wzrost w centymetrach
                                <br/>
                                L – wiek w latach
                            </p>
                        </Grid>
                    </Grid>
                </Typography>
            </CardContent>
        </Card>
    );
}
