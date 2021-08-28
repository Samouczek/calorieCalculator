import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import PPMForm from "../organisms/ppmForm/PPMForm";
import PALClassification from "../organisms/palClassification/PALClassification";
import FreeTimeActivity from "../organisms/freeTimeActivity/FreeTimeActivity";
import WorkTimeActivity from "../organisms/workTimeActivity/WorkTimeActivity";
import CPMForm from "../organisms/cpmForm/CpmForm";
import Copyright from "../organisms/Copyright";
import InfoPPM from "../atoms/infoPpm/InfoPPM";
import InfoCPM from "../atoms/infoCpm/InfoCPM";

export default function Profile(){
    const [ppmValue, setPpmValue] = useState(false);
    const[bodyWeight, setBodyWeight] = useState(false);

    const handleParameters = (ppmParameter, bodyWeightParameter) => {
        setPpmValue(ppmParameter);
        setBodyWeight(bodyWeightParameter);
    }

    return  (
        <Container component="main" maxWidth="lg">
            <InfoPPM/>
            <PPMForm getParameters={handleParameters} />
            <InfoCPM/>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} lg={4}>
                        <FreeTimeActivity/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <WorkTimeActivity/>
                    </Grid>
                    <Grid item sm={12} md={12} lg={4}>
                        <PALClassification/>
                    </Grid>
                </Grid>
            <CPMForm bodyWeight={bodyWeight} ppm={ppmValue} />
            <Copyright/>
        </Container>
    );

}