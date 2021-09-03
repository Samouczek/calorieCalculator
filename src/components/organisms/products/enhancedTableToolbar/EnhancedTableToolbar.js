import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import {lighten, makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import DeleteProducts from "../../../../data/DeleteProducts";
import theme from "../../../../styles/theme";

const useStyle = makeStyles(() => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
                flex: '1 1 100%',
                color: theme.palette.primary.dark,
            },
}));

export default function EnhancedTableToolbar({user, selected, confirmRemoveYourProduct}){
    const [numberDelete, setNumberDelete] = useState(0);
    const classes = useStyle();
    const  numSelected  = selected.length;

    const handleClickDeleteIcon = () =>{
        setNumberDelete(prev => prev+1);
        selected.forEach(item => {
            DeleteProducts(user,item)
        })
    }

    useEffect(()=>{
        if (typeof confirmRemoveYourProduct === 'function') {
            console.log("numberAdd: " + numberDelete);
            confirmRemoveYourProduct(numberDelete);
        }
    },[numberDelete]);

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} zaznaczono
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div" >
                    Tabela produktów
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={handleClickDeleteIcon}/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Lista filtrowana">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};