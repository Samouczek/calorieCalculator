import {makeStyles} from "@material-ui/core/styles";
import theme from "../../../styles/theme";

function StylePPMForm(){
    return makeStyles(() => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        paper: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        button: {
            textAlign: 'center',
        },
        header: {
            color: theme.palette.primary.dark,
            textAlign: 'center',
            paddingBottom: theme.spacing(3),
        },
        result: {
            color:  theme.palette.common.black,
            textAlign: 'center',
            paddingBottom: theme.spacing(3),
        },
        resultNumber: {
            color:  theme.palette.primary.dark,
        },
    }));
}

export default StylePPMForm();