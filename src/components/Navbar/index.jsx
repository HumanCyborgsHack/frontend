import { BarChartOutlined, Book, Home } from "@mui/icons-material";
import { AppBar, Fab, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "80px",
    height: "80px"
});

export default function Navbar() {
    return (
        <AppBar
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0 }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <BarChartOutlined />
                </IconButton>
                <StyledFab size="large" color="secondary" aria-label="add">
                    <Home></Home>
                </StyledFab>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton size="large" color="inherit">
                    <Book></Book>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
