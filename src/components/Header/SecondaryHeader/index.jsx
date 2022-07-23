import ProgressBar from "@/components/ProgressBar";
import { ArrowBack, Star } from "@mui/icons-material";
import { Fab, IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Styles from "./Styles";

export default function SecondaryHeader({
    title = "Matemáticas",
    subtitle = "Nivel 6",
    progress = 80
}) {
    const classes = Styles();

    return (
        <Box className={classes.box}>
            <Tooltip title="Regresar" className={classes.arrowBack}>
                <Fab color="primary">
                    <ArrowBack></ArrowBack>
                </Fab>
            </Tooltip>
            <h1
                style={{
                    textAlign: "center",
                    margin: "-10px 0 10px 0",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#302f21"
                }}
            >
                {title}
            </h1>
            <h4
                style={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    marginBottom: "-12px"
                }}
            >
                {subtitle}
            </h4>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <IconButton style={{ color: "#e8c049" }}>
                    <Star fontSize="large" className={classes.icons}></Star>
                </IconButton>
                <ProgressBar
                    variant="determinate"
                    value={progress}
                    style={{
                        width: "70%",
                        marginLeft: "10px",
                        alignSelf: "flex-end",
                        marginBottom: "10px",
                        color: "red"
                    }}
                ></ProgressBar>
            </div>
        </Box>
    );
}
