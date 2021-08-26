import React from "react";
import ProfilePPMForm from "../organisms/ProfilePPMForm";
import PALClassification from "../organisms/PALClassification";
import FreeTimeActivity from "../organisms/FreeTimeActivity";
import WorkTimeActivity from "../organisms/WorkTimeActivity";

export default function Profile(){
    return <>
        <ProfilePPMForm/>
        <FreeTimeActivity/>
        <WorkTimeActivity/>
        <PALClassification/>
    </>

}