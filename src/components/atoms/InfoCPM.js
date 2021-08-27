import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import theme from "../../styles/theme";
import StyleInfoCPM from "../../styles/StyleInfoCPM";

export default function InfoCPM() {
    const classes = StyleInfoCPM();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant = "h6" component = "h2"
                            className={classes.title} >
                    Całkowita przemiana materii (CPM)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <p style={{textAlign: 'justify'}}>
                                <strong>
                                    Całkowita przemiana materii (CPM)
                                </strong>
                                (
                                <em>
                                    ang. total daily energy expenditure – TDEE
                                </em>)
                                –  suma wszystkich wydatków energetycznych człowieka, które ponosi podczas
                                aktywności fizycznej w ciągu jednego dnia.
                            </p>
                            <p>
                                Całkwitą przemianę materii można obliczyć posługując się uproszczonym wzorem.
                            </p>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <p className={classes.formula}>
                                CPM = PPM × PAL
                            </p>
                            <p className={classes.componentsFormula}>
                                <strong color={theme.palette.primary.dark}>
                                    PPM
                                </strong>
                                – podstawowa przemiana materii, którą możesz
                                <br/>
                                obliczyć ze wzoru Harrisa i Benedicta
                                <br/>
                                <strong color={theme.palette.primary.dark}>
                                    PAL
                                </strong>
                                – współczynnik aktywności fizycznej, który możesz
                                <br/>
                                oszacować na podstawie ankiety
                            </p>
                        </Grid>
                    </Grid>
                </Typography>
            </CardContent>
        </Card>
    );
}
