import DefaultCard from "@/components/Card/default";
import SecondaryHeader from "@/components/Header/SecondaryHeader";
import { Sub } from "@/components/ListOfSubs";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";

const courses = [
    {
        id: 1,
        subject: "Números y operaciones",
        color: "#9fdb8f",
        img: "https://thecatapi.com/api/images/get?format=src&type=gif"
    },
    {
        id: 2,
        subject: "Medidas y geometría",
        color: "#46d2cd",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    },
    {
        id: 3,
        subject: "Teorema de Pitágoras",
        color: "#f798ac",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    },
    {
        id: 2,
        subject: "Habla Inglesa",
        color: "#f7c25a",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    },
    {
        id: 3,
        subject: "Habla Inglesa",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    }
];

export default function Alumno2() {
    return (
        <div>
            <SecondaryHeader></SecondaryHeader>
            <Grid container style={{ padding: "0 10px 0 10px" }}>
                <Grid item xs={12}>
                    <DefaultCard></DefaultCard>
                </Grid>
                {courses.map((course, i) => (
                    <Grid
                        xs={12}
                        key={course.subject + i}
                        style={{ marginBottom: "10px" }}
                    >
                        <Sub
                            color={course.color}
                            image={course.img}
                            subject={course.subject}
                        ></Sub>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
