import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles";

export default function DefaultCard({
    title = "Matematicas - Restas 1",
    subtitle = "Clase en 20 minutos",
    imageUrl = "/images/math.svg",
    color = "#f7beef"
}) {
    const classes = Styles();

    const navigate = useNavigate();

    return (
        <Box
            className={classes.box}
            style={{ backgroundColor: color }}
            onClick={() => navigate("/alumno-1/matematicas/lineas-rectas")}
        >
            <div
                style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img src={imageUrl} alt="math"></img>
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
                <h5 className={classes.title}>{title}</h5>
                <p className={classes.subtitle}>{subtitle}</p>
            </div>
        </Box>
    );
}
