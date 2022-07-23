import { Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import Styles from "./Styles";

export default function Alumno2() {
    const classes = Styles();

    return (
        <div>
            <Box className={classes.box}>
                <p className={classes.boxText1}>Hola, Pedro</p>
                <p className={classes.boxText2}>¡Llego la hora de aprender!</p>
                <input
                    className={classes.textField}
                    placeholder="Encuentra tu clase"
                ></input>
            </Box>
            <Grid container style={{ padding: "0 10px 0 10px" }}>
                <Grid item xs={12}>
                    <p
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "13px",
                            marginLeft: "5px",
                            marginTop: "15px"
                        }}
                    >
                        Tus Clases
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        style={{
                            backgroundColor: "blue",
                            borderRadius: "10px",
                            height: "150px",
                            display: "flex"
                        }}
                    >
                        <div
                            style={{
                                width: "40%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <img src="/images/math.svg" alt="math"></img>
                        </div>
                        <div
                            style={{
                                width: "60%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <p>Matematicas</p>
                            <p>Clase en 20 minutos</p>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
