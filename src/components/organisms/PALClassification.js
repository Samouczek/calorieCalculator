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
import theme from "../../styles/theme";
import StylePALClassification from "../../styles/StylePALClassification";

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

const rows = [
    createData('A', "1.4", "1.5", "1.6", "1.7"),
    createData('B', "1.5", "1.6", "1.7", "1.8"),
    createData('C', "1.6", "1.7", "1.8", "1.9"),
    createData('D', "1.7", "1.8", "1.9", "2.1"),
    createData('E', "1.9", "2.0", "2.2", "2.3"),
];
function createData(freeTimeActivity, first, second, third, fourth ) {
    return { freeTimeActivity, first, second, third, fourth };
}

export default function PALClassification() {
    const classes = StylePALClassification();

    return (
        <ThemeProvider theme = { theme }>
            <Card className = { classes.root }>
                <CardContent>
                    <Typography variant = "h6"
                                component = "h6"
                                className = { classes.title }
                    >
                        III. Klasyfikacja współczynnika aktywności fizycznej (PAL)
                    </Typography>
                    <Typography className = { classes.pos }
                                color = "textSecondary"
                    >
                        <TableContainer component = { Paper } >
                            <Table className = { classes.table }
                                   aria-label = "simple table">
                                <TableHead>
                                    <StyledTableRow>
                                        < StyledTableCell  align="center">
                                            Czas wolny
                                        </ StyledTableCell >
                                        < StyledTableCell  align="center"
                                                           colSpan={4}
                                        >
                                            Praca
                                        </ StyledTableCell >
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <TableCell>
                                        </TableCell>
                                        <TableCell align="center">
                                            1
                                        </TableCell>
                                        <TableCell align="center">
                                            2
                                        </TableCell>
                                        <TableCell align="center">
                                            3
                                        </TableCell>
                                        <TableCell align="center">
                                            4
                                        </TableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    { rows.map(( row) => (
                                        <StyledTableRow key = { row.freeTimeActivity } >
                                            <TableCell component = "th"
                                                       scope = "row"
                                                       align = "center">
                                               <strong>
                                                   { row.freeTimeActivity }
                                               </strong>
                                            </TableCell>
                                            <TableCell align="center">
                                                { row.first }
                                            </TableCell>
                                            <TableCell align="center">
                                                { row.second }
                                            </TableCell>
                                            <TableCell align="center">
                                                { row.third }
                                            </TableCell>
                                            <TableCell align="center">
                                                { row.fourth }
                                            </TableCell>
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


