import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function ProfileForm() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Obliczenie
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="bodyWeight"
                        name="bodyWeight"
                        label="masa ciała"
                        fullWidth
                        autoComplete="given-weight"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="bodyGrowth"
                        name="bodyGrowth"
                        label="wzrost"
                        fullWidth
                        autoComplete="given-growth"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="wiek"
                        fullWidth
                        autoComplete="given-age"
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
            </Button>
        </React.Fragment>
    );
}