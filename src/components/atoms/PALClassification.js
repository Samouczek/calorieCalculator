import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(freeTimeActivity, first, second, third, fourth ) {
    return { freeTimeActivity, first, second, third, fourth };
}

const rows = [
    createData('A', "1,4", "1,5", "1,6", "1,7"),
    createData('B', "1,5", "1,6", "1,7", "1,8"),
    createData('C', "1,6", "1,7", "1,8", "1,9"),
    createData('D', "1,7", "1,8", "1,9", "2,1"),
    createData('E', "1,9", "2,0", "2,2", "2,3"),
];

export default function PALClassification() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Czas wolny</TableCell>
                        <TableCell align="right" colSpan={4}>Praca</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>  </TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">4</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.freeTimeActivity}>
                            <TableCell component="th" scope="row">
                                {row.freeTimeActivity}
                            </TableCell>
                            <TableCell align="right">{row.first}</TableCell>
                            <TableCell align="right">{row.second}</TableCell>
                            <TableCell align="right">{row.third}</TableCell>
                            <TableCell align="right">{row.fourth}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
