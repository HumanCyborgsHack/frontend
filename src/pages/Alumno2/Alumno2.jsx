import DefaultCard from "@/components/Card/default";
import SecondaryHeader from "@/components/Header/SecondaryHeader";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";

export default function Alumno2() {
    return (
        <div>
            <SecondaryHeader></SecondaryHeader>
            <Grid container style={{ padding: "0 10px 0 10px" }}>
                <Grid item xs={12}>
                    <DefaultCard></DefaultCard>
                </Grid>
            </Grid>
        </div>
    );
}
