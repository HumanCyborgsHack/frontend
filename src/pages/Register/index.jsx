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

import { useState } from "react";

export default function Student1Page() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && grade && age && password && nickname) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nick: nickname,
                    name: name,
                    age: age,
                    email: email,
                    password: password
                })
            };
            const response = await fetch(
                "https://poli-learning-backend.scm.azurewebsites.net/student",
                requestOptions
            );
            const data = await response.json();
            console.log(data);
        } else {
            alert("Please fill all the fields");
        }
    };

    return (
        <>
            <Grid
                container
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundColor: "#6680d3",
                    // border: "1px solid #000",
                    borderRadius: "0px 0px 20px 20px",
                    height: "40vh"
                }}
            >
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                    <Box
                        color="#000"
                        sx={{
                            position: "relative",
                            width: "100%",
                            marginTop: "1rem",
                            paddingRight: "2rem",
                            height: "100%",
                            alignItems: "center"
                        }}
                    >
                        <img src={logo} alt="" />
                        <h1
                            style={{
                                textAlign: "center"
                            }}
                        >
                            Bienvenido
                        </h1>
                        <p
                            style={{
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                textAlign: "center"
                            }}
                        >
                            Comencemos la aventura
                        </p>
                    </Box>
                </Grid>
            </Grid>
            <section
                style={{
                    paddingTop: "5rem",
                    textAlign: "center",
                    backgroundColor: "#FEFEF8",
                    height: "100vh"
                }}
            >
                <TextField
                    label={"Nombre completo"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label={"Nombre de usuario"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <TextField
                    label={"Correo electronico"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label={"Grado"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <TextField
                    label={"Edad"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField
                    label={"Contraseña"} //optional
                    style={{
                        marginBottom: "1rem"
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    style={{
                        backgroundColor: "#79E5D5",
                        marginTop: "3rem",
                        paddingRight: "7rem",
                        paddingLeft: "7rem"
                    }}
                >
                    <Link to="/alumno-1">Registrarse</Link>
                </button>
            </section>
        </>
    );
}
