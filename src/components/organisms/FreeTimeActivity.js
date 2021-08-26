import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from "../atoms/theme";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            minHeight: 470,
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: 500,
        },
    },
    title: {
        color: theme.palette.primary.dark
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FreeTimeActivity() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h6" className={classes.title} >
                    I. Aktywność fizyczna w pracy
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <ol>
                        <li>bardzo lekka, np. siedzenie przed komputerem większość dnia lub bycie kierowcą</li>
                        <li>lekka, np. niewymagająca praca przemysłowa, sprzedaż lub praca biurowa
                            obejmująca lekkie czynności (np. przenoszenie korespondencji wewnątrz biura,
                            praca przy kserokopiarce)</li>
                        <li>umiarkowana, np. sprzątanie, praca w kuchni lub dostarczanie poczty pieszo</li>
                        <li>ciężka, np. ciężka praca przemysłowa, prace budowlane lub rolnictwo</li>
                    </ol>
                </Typography>
            </CardContent>
        </Card>
    );
}
