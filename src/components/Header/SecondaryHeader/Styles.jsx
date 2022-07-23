import { makeStyles } from "@mui/styles";

const Styles = makeStyles({
    box: {
        width: "100%",
        backgroundColor: "#f0eaa7",
        height: "160px",
        borderRadius: "0 0 20px 20px",
        padding: "0 20px 0 30px"
    },
    arrowBack: {
        position: "absolute",
        top: "10px",
        left: "-10px"
    },
    boxText1: {
        fontFamily: "Montserrat",
        fontWeight: "900",
        color: "#ffff",
        fontSize: "20px",
        marginBottom: "0px"
    },
    boxText2: {
        fontFamily: "Montserrat",
        fontWeight: "900",
        color: "black",
        fontSize: "20px",
        marginBottom: "12px"
    },
    icons: {
        transform: "scale(1.7)"
    }
});

export default Styles;
