import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FreeTimeActivity() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
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
