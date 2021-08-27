import React from "react";
import PPMForm from "../organisms/PPMForm";
import PALClassification from "../organisms/PALClassification";
import FreeTimeActivity from "../organisms/FreeTimeActivity";
import WorkTimeActivity from "../organisms/WorkTimeActivity";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InfoPPM from "../atoms/InfoPPM";
import InfoCPM from "../atoms/InfoCPM";
import CPMForm from "../organisms/CpmForm";
import Copyright from "../organisms/Copyright";
import ResultCalcCpm from "../atoms/ResultCalcCpm";

export default function Profile(){
    return  <Container component="main" maxWidth="lg">
        <InfoPPM/>
        <PPMForm/>
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
        <CPMForm/>
        <ResultCalcCpm/>
        <Copyright/>
    </Container>

}