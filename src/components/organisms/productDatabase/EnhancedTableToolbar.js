import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import theme from "../../../styles/theme";

const useStyle = makeStyles(() => ({
    title: {
                flex: '1 1 100%',
                color: theme.palette.primary.dark,
            },
}));

export default function EnhancedTableToolbar(){
    const classes = useStyle();

    return (
        <Toolbar>
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div" >
                    Baza produktów
                </Typography>
                <Tooltip title="Lista filtrowana">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
        </Toolbar>
    );
};