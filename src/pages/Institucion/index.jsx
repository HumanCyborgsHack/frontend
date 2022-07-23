import ListOfClasses from "@/components/ListOfClasses";
import Header from "@/components/Header";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Search from "@/components/Search";
import logo from "@/assets/inicio/Logo.png";
import background from "@/assets/inicio/Top_Box_Azul.png";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Section, LinkButton } from "./styles";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";

const path = "/alumno-1/matematicas";

const data = [
    {
        id: 1,
        name: "1er año",
        img: "",
        link: ""
    },
    {
        id: 2,
        name: "2do año",
        img: "",
        link: ""
    }
];

export default function Clase() {
    return (
        <>
            <Header name={"Director"}>
                <h3>¡Llegó la hora de aprender!</h3>
            </Header>
            <h1
                style={{
                    marginTop: "20px",
                    paddingLeft: "20px"
                }}
            >
                Grados
            </h1>
            <ListOfClasses data={data} />
        </>
    );
}
