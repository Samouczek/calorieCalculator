import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Container, Input, InputLabel, MenuItem, Select} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../../../../styles/theme";
import StyleProductForm from "./StyleProductForm";

export default function ProductForm({getParameters}) {
    const classes = StyleProductForm();
    const [productName, setProductName] = useState(false);
    const [productCalories, setProductCalories] = useState(false);
    const [productProtein, setProductProtein] = useState(false);
    const [productCarbohydrates, setProductCarbohydrates] = useState(false);
    const [productFats, setProductFats] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom className={classes.header}>
                        Dodawanie produktu (wartośc odżywcza na 100g)
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={8}>
                            <TextField
                                required
                                id = "productName"
                                name = "productName"
                                label = "nazwa produktu"
                                fullWidth
                                autoComplete = "given-productName"
                                onChange = { event => setProductName(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "productCalories"
                                name = "productCalories"
                                label = "wartość energetyczna (kcal)"
                                fullWidth
                                autoComplete = "given-calories"
                                onChange = { event => setProductCalories(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "producyProtein"
                                name = "producyProtein"
                                label = "białko (g)"
                                fullWidth
                                autoComplete = "given-protein"
                                onChange = { event => setProductProtein(event.target.value) }
                            />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "carbohydrates"
                                name = "carbohydrates"
                                label = "węglowodany (g)"
                                fullWidth
                                autoComplete = "given-carbohydrates"
                                onChange = { event => setProductCarbohydrates(event.target.value) }
                            />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "productFats"
                                name = "productFats"
                                label = "tłuszcze (g)"
                                fullWidth
                                autoComplete = "given-fats"
                                onChange = { event => setProductFats(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} lg={10}>
                            <div className = {classes.root}>{
                                (showAlert)
                                &&
                                <Alert
                                    severity="error"
                                    onClose={() => setShowAlert(null)}
                                >
                                    { showAlert }
                                </Alert>}
                            </div>
                        </Grid>
                        <Grid item  xs={12} sm={4} md={3} lg={2}>
                            <Button
                                fullWidth
                                variant = "contained"
                                color = "primary"
                                className = { classes.button }
                            >
                                dodaj produkt
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}