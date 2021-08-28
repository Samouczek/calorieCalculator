import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React from "react";
import StyleNavigationButtonMobile from "./StyleNavigationButtonMobile";

export default function NavigationButtonMobile({ title, pathApp }){
    const classes = StyleNavigationButtonMobile();

    return  (
            <MenuItem>
                <Button color="inherit"><a href={pathApp} className={classes.anchorLink}>{title}</a></Button>
            </MenuItem>
    );
}
