import {makeStyles} from "@material-ui/core/styles";
import theme from "../../../styles/theme";

function StyleWorkTimeActivity() {
    return makeStyles({
        root: {
            minWidth: 275,
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
                minHeight: 470,
            },
            [theme.breakpoints.up('lg')]: {
                minHeight: 500,
            },
        },
        title: {
            color: theme.palette.primary.dark
        },
        pos: {
            marginBottom: 12,
        },
    });
}

export default StyleWorkTimeActivity();