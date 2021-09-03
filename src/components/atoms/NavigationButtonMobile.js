import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React from "react";
import {NavLink} from "react-router-dom";

export default function NavigationButtonMobile({ title, pathApp }){

    return  (
                <MenuItem>
                    <Button color="inherit" component={NavLink} to={pathApp}>{title}</Button>
                </MenuItem>
            );
}
