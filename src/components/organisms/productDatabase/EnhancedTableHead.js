import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";


const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Nazwa' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Wartość energetyczna (kcal)' },
    { id: 'proteins', numeric: true, disablePadding: false, label: 'Białko (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Węglowdany (g)' },
    { id: 'fats', numeric: true, disablePadding: false, label: 'Tłuszcze(g)' },
];

const useStyle = makeStyles((theme) => ({
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    head: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    }));

export default function EnhancedTableHead(props) {
    const { order, orderBy,  onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const classesSecond = useStyle();

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classesSecond.visuallyHidden}>
                                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};