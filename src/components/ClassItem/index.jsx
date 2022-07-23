import {
    InsertEmoticon,
    SentimentDissatisfied,
    ArrowForward,
    SentimentVeryDissatisfied
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

export default function ClassItem({
    tema = "Introducción a las líneas rectas",
    impartidor = "Angel Acevedo"
}) {
    return (
        <div
            style={{
                backgroundColor: "#e8d1e1",
                borderRadius: "15px",
                margin: "10px 10px 10px 10px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                minHeight: "80px"
            }}
        >
            <div
                style={{
                    flexBasis: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Avatar sizes="large">{impartidor[0]}</Avatar>
            </div>
            <div style={{ flexBasis: "65%" }}>
                <p
                    style={{
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        fontSize: "14px"
                    }}
                >
                    {tema}
                </p>
                <p
                    style={{
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        fontSize: "12px"
                    }}
                >
                    Por: {impartidor}
                    <IconButton style={{ marginRight: "-10px" }}>
                        <InsertEmoticon
                            style={{ color: "green" }}
                        ></InsertEmoticon>
                    </IconButton>
                    <IconButton style={{ marginRight: "-10px" }}>
                        <SentimentDissatisfied
                            style={{ color: "yellow" }}
                        ></SentimentDissatisfied>
                    </IconButton>
                    <IconButton style={{ marginRight: "-10px" }}>
                        <SentimentVeryDissatisfied
                            style={{ color: "red" }}
                        ></SentimentVeryDissatisfied>
                    </IconButton>
                </p>
            </div>
            <div style={{ flexBasis: "15%" }}>
                <IconButton color="secondary">
                    <ArrowForward></ArrowForward>
                </IconButton>
            </div>
        </div>
    );
}
