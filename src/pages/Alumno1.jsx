import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Search from "@/components/Search";

const props = {
    name: "Pedro"
};

export default function Student1Page() {
    const { name } = props;
    return (
        <Grid
            container
            sx={{
                backgroundColor: "#3a5098",
                // border: "1px solid #000",
                borderRadius: "0px 0px 15px 15px",
                padding: "1rem"
            }}
        >
            <Grid item xs={3}>
                <img src="" alt="" />
            </Grid>
            <Grid item xs={9}>
                <Box
                    color="#000"
                    sx={{
                        marginTop: "3rem",
                        padding: "2rem",
                        textAlign: "right"
                    }}
                >
                    <h1>Hola! {name}</h1>
                    <h3>¡Llegó la hora de aprender!</h3>
                </Box>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs></Grid>
                <Grid item xs={8}>
                    <Search />
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Grid>
    );
}
