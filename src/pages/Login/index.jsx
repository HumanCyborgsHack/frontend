import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Search from "@/components/Search";
import logo from "@/assets/inicio/Logo.png";
import background from "@/assets/inicio/Top_Box_Azul.png";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Section, LinkButton } from "./styles";
import { Link } from "react-router-dom";

export default function Student1Page() {
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
                            marginTop: "3rem",
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
                            Poli-learning
                        </h1>
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
                <h1
                    style={{
                        fontSize: "1.5rem"
                    }}
                >
                    ¡Aprende a tu ritmo!
                </h1>
                <p
                    style={{
                        paddingTop: "3rem",
                        fontSize: "1.5rem",
                        paddingRight: "2rem",
                        paddingLeft: "2rem"
                    }}
                >
                    ¡Explora las maneras mas emocionantes de aprender con
                    distintos profesores!
                </p>
                <button
                    style={{
                        backgroundColor: "#79E5D5",
                        marginTop: "3rem",
                        paddingRight: "7rem",
                        paddingLeft: "7rem"
                    }}
                >
                    <Link to="/register/login">Iniciar sesión</Link>
                </button>
                <p
                    style={{
                        paddingTop: "3rem"
                    }}
                >
                    ¿Eres nuevo?
                    <Link
                        to="/register/register"
                        style={{
                            color: "#79E5D5"
                        }}
                    >
                        {" "}
                        Registrate
                    </Link>
                </p>
            </section>
        </>
    );
}
