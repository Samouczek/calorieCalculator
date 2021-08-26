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

export default function WorkTimeActivity() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h6" className={classes.title} >
                    I. Aktywność fizyczna w wolnym czasie
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <ol style={{listStyleType: 'upper-latin'}}>
                        <li>bardzo lekka: brak aktywności fizycznej w wolnym czasie</li>
                        <li>lekka: np. spacer, rekreacyjna jazda na rowerze, praca w ogródku, wykonywana
                            w przybliżeniu raz w tygodniu</li>
                        <li>umiarkowana: regularne ćwiczenia przynajmniej raz w tygodniu, np. spacer, jaz-
                            da na rowerze, albo praca w ogródku lub marsz 10–30 min dziennie</li>
                        <li>duża: regularne intensywne ćwiczenia więcej niż raz w tygodniu, np. intensywne
                            spacery lub intensywna jazda na rowerze, albo uprawianie sportu</li>
                        <li>intensywna: ciężka aktywność fizyczna kilka razy w tygodniu</li>
                    </ol>
                </Typography>
            </CardContent>
        </Card>
    );
}
