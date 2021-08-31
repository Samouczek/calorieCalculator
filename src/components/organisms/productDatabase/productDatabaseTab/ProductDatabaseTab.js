import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider } from '@material-ui/core/styles';
import getComparator from "../../../../logics/products/getComparator";
import stableSort from "../../../../logics/products/stableSort";
import EnhancedTableHead from "../EnhancedTableHead";
import EnhancedTableToolbar from "../EnhancedTableToolbar";
import StyleProductDatabaseTab from "./StyleProductDatabaseTab";
import theme from "../../../../styles/theme";

function createData(name, calories, proteins, carbs, fats) {
    return { name, calories,proteins, carbs,  fats };
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

export default function ProductsTab() {
    const classes = StyleProductDatabaseTab();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <ThemeProvider theme = {theme}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            key={row.name}
                                        >
                                            <TableCell padding="checkbox">
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.proteins}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.fats}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Zmniejsz odstęp"
            />
            </ThemeProvider>
        </div>
    );
}