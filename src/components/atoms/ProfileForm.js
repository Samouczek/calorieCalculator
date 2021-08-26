import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import { Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },

}));

const sex = [
    {
        value: 0,
        label: 'kobieta',
    },
    {
        value: 1,
        label: 'mężczyzna',
    }
];


export default function ProfileForm() {
    const classes = useStyles();
    const [chooseSex, setChooseSex] = React.useState(0);

    const handleChange = (event) => {
        setChooseSex(event.target.value);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
            <Typography variant="h6" gutterBottom>
                Wyliczenie podstawowej przemiany materii PPM
            </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={3}>
                    <InputLabel id="demo-mutiple-checkbox-label" required>płeć</InputLabel>
                    <Select

                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        value={chooseSex}
                        onChange={handleChange}
                        input={<Input />}
                        fullWidth
                    >
                        {sex.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        required
                        id="bodyWeight"
                        name="bodyWeight"
                        label="masa ciała w kg"
                        fullWidth
                        autoComplete="given-weight"
                    />
                </Grid>
                <Grid item  xs={12} sm={6} md={3}>
                    <TextField
                        required
                        id="bodyGrowth"
                        name="bodyGrowth"
                        label="wzrost w cm"
                        fullWidth
                        autoComplete="given-growth"
                    />
                </Grid>
                <Grid item  xs={12} sm={6} md={3}>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="wiek w latach"
                        fullWidth
                        autoComplete="given-age"
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            > oblicz PPM
            </Button>
                </ThemeProvider>
        </React.Fragment>
    );
}