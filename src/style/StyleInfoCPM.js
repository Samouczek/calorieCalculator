import { makeStyles } from '@material-ui/core/styles';
import theme from "./theme";

 const StyleInfoCPM = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.dark,
        textAlign: "center",
    },
    pos: {
        marginBottom: 12,
    },
    formula: {
        color: theme.palette.common.black,
        textAlign: 'center',
    },
    textFormula: {
        color: theme.palette.primary.dark,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    componentsFormula: {
        textAlign: "center",
    }
});

export default StyleInfoCPM();