import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {Container, Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import theme from "../atoms/theme";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(10),
    },
    button: {
        textAlign: "center",
    },
    header: {
        color: theme.palette.primary.dark,
        textAlign: "center",
        paddingBottom: theme.spacing(3),
    }


}));

const values = [1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3];

export default function CPMForm({ppm}) {
    const classes = useStyles();
    const [chooseValue, setChooseValue] = useState(0);
    const [ppmResult, setPpmResult] = useState(0);

    const handleChange = (event) => {
        setChooseValue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom className={classes.header}>
                        Wyliczenie całkowitej przemiany materii CPM
                    </Typography>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={4} >
                            <InputLabel id="demo-mutiple-checkbox-label" required>PAL</InputLabel>
                            <Select

                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                value={chooseValue}
                                onChange={handleChange}
                                input={<Input />}
                                fullWidth
                            >
                                {values.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item  xs={12} sm={4} >
                            <TextField
                                required
                                id="ppm"
                                name="ppm"
                                label="PPM"
                                fullWidth
                            />
                        </Grid>
                        <Grid item  xs={12} sm={4}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            > oblicz CPM
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}