import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React from "react";

export default function NavigationButtonMobile({title}){
    return  <MenuItem>
                <Button color="inherit">{title}</Button>
            </MenuItem>
}
