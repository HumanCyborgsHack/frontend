import { makeStyles } from "@mui/styles";

const Styles = makeStyles({
    box: {
        width: "100%",
        backgroundColor: "blueviolet",
        height: "180px",
        borderRadius: "0 0 20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#ffff",
        fontSize: "20px",
        padding: "0 20px 0 30px"
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
    textField: {
        backgroundColor: "#ffff",
        height: "40px",
        width: "95%",
        alignSelf: "center",
        borderRadius: "20px",
        textAlign: "center",
        fontFamily: "Montserrat"
    }
});

export default Styles;
