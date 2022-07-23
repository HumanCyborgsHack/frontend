import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Search from "@/components/Search";
import logo from "@/assets/inicio/Logo.png";
import { Section } from "./styles";

export default function Header({ name, children, searchDisabled }) {
    return (
        <Grid
            container
            sx={{
                backgroundColor: "#6680d3",
                // border: "1px solid #000",
                borderRadius: "0px 0px 20px 20px"
            }}
        >
            <Grid item xs={3}>
                <img src={logo} alt="" width={150} />
            </Grid>
            <Grid item xs={9}>
                <Box
                    color="#000"
                    sx={{
                        position: "relative",
                        width: "100%",
                        marginTop: "3rem",
                        paddingRight: "2rem",
                        textAlign: "right",
                        height: "100%"
                    }}
                >
                    <h1>Hola! {name}</h1>
                    <Section>{children}</Section>
                </Box>
            </Grid>

            <Grid
                container
                item
                xs={12}
                sx={{
                    marginBottom: "1rem"
                }}
            >
                <Grid item xs></Grid>
                <Grid item xs={8}>
                    {searchDisabled ? null : <Search />}
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Grid>
    );
}
