import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";

function StyleLogin() {
    return makeStyles(() => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submitLog: {
            margin: theme.spacing(3, 0, 1),
        },
        submitCancel: {
            margin: theme.spacing(1, 0, 2),
        },
    }));
}

export default StyleLogin();