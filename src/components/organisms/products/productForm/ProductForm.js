import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/core/styles';
import AddProductToDB from "../../../../data/AddProductToDB";
import theme from "../../../../styles/theme";
import StyleProductForm from "./StyleProductForm";
import ValidationProductForm from "../../../../logics/products/ValidationProductForm";

export default function ProductForm({user,confirmNewProduct}) {
    const classes = StyleProductForm();
    const [name, setName] = useState(null);
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [carbohydrates, setCarbohydrates] = useState(null);
    const [fats, setFats] = useState(null);
    const [showAlert, setShowAlert] = useState(null);
    const [numberAdd, setNumberAdd] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        if (ValidationProductForm( name, calories, protein, carbohydrates, fats) === 0) {
            AddProductToDB(user, name, calories, protein, carbohydrates, fats);
            setShowAlert("Produkt został zapisany");
            setNumberAdd(prev => prev+1);
               setName('');
               setCalories('');
               setProtein('');
               setCarbohydrates('');
               setFats('');
        } else {
            setShowAlert(ValidationProductForm(name, calories, protein, carbohydrates, fats));
        }
    }

    useEffect(()=>{
        if (typeof confirmNewProduct === 'function') {
            console.log("numberAdd: " + numberAdd);
            confirmNewProduct(numberAdd);
        }
    },[numberAdd]);

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
                                value={name}
                                fullWidth
                                autoComplete = "given-productName"
                                onChange = { event => setName(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "productCalories"
                                name = "productCalories"
                                label = "wartość energetyczna (kcal)"
                                value={calories}
                                fullWidth
                                autoComplete = "given-calories"
                                onChange = { event => setCalories(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "producyProtein"
                                name = "producyProtein"
                                label = "białko (g)"
                                value={protein}
                                fullWidth
                                autoComplete = "given-protein"
                                onChange = { event => setProtein(event.target.value) }
                            />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "carbohydrates"
                                name = "carbohydrates"
                                label = "węglowodany (g)"
                                value={carbohydrates}
                                fullWidth
                                autoComplete = "given-carbohydrates"
                                onChange = { event => setCarbohydrates(event.target.value) }
                            />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id = "productFats"
                                name = "productFats"
                                label = "tłuszcze (g)"
                                value={fats}
                                fullWidth
                                autoComplete = "given-fats"
                                onChange = { event => setFats(event.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} lg={10}>
                            <div className = {classes.root}>{
                                (showAlert)
                                &&
                                <Alert
                                    severity={(showAlert === "Produkt został zapisany") ? "success" : "error"}
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
                                onClick={handleClick}
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