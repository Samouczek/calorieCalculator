import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core";
import {ThemeProvider } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import theme from "../../../styles/theme";
import StyleProductsTable from "./StyleProductsTable";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, protein, carbohydrates, fats ) {
    return { name, calories, protein, carbohydrates, fats };
}

const rows = [
    createData("Lays zielona cebulka", 526, 6.1, 53.0, 31.0),
    createData("Chleb wojskowy na zakwasie", 204, 4.4, 41.0, 1.1),
    createData("Kasza gryczana", 347, 13.50, 69.30, 3.1),
    createData("Kasza jaglana", 351, 11.50, 71.6, 2.9),
    createData("Ryż brązowy", 337, 7.5, 76.8, 1.9),
    createData("Ryż basmati Supreme", 356, 8.6, 78.0, 1.0),
    createData("Ryż jęczmienna pęczka", 343, 9, 74.9, 2),
    createData("Twaróg Garwoliński tłusty", 151.0, 17.0, 2.7, 8.0),
    createData("Fruvita skyr naturalny", 66.0, 12.0, 3.90, 0),
    createData("Jajka", 139, 12.50, 0.6, 9.7),
    createData("Banan", 97.0, 1.0, 23.5, 0.3),
    createData("Borówki amerykańskie", 61.0, 0.6, 15.0, 0.6),
    createData("Pryncypałki", 541.0, 6.1, 57.0, 31.0),
    createData("Baton Snickers", 481.0, 8.6, 60.0, 22.0),
];


export default function ProductsTable() {
    const classes = StyleProductsTable();

    return (
        <ThemeProvider theme = {theme}>
            <Card className = {classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h5" className={classes.title}>
                       Tabela Produktów
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <TableContainer component={Paper} >
                            <Table className={classes.table}
                                   aria-label="simple table">
                                <TableHead>
                                    <StyledTableRow>
                                        < StyledTableCell  align="center">Nazwa</ StyledTableCell >
                                        < StyledTableCell  align="center" colSpan={4}>
                                            Wartości odżywcze na 100g
                                        </ StyledTableCell >
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <TableCell> </TableCell>
                                        <TableCell align="center">Wartość energetyczna w kcal</TableCell>
                                        <TableCell align="center">Białko w g</TableCell>
                                        <TableCell align="center">Węglowodany w g</TableCell>
                                        <TableCell align="center">Tłuszcze w g</TableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    { rows.map(( row) => (
                                        <StyledTableRow key={row.name} >
                                            <TableCell component="th" scope="row" align="center">
                                               <strong>{row.name}</strong>
                                            </TableCell>
                                            <TableCell align="center">{row.calories}</TableCell>
                                            <TableCell align="center">{row.protein}</TableCell>
                                            <TableCell align="center">{row.carbohydrates}</TableCell>
                                            <TableCell align="center">{row.fats}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}


