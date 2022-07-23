import ClassItem from "@/components/ClassItem";
import SecondaryHeader from "@/components/Header/SecondaryHeader";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";

const clases = [
    {
        tema: "Teorema de Pitágoras I",
        impartidor: "Albert Einstein"
    },
    {
        tema: "Teorema de Pitágoras II",
        impartidor: "Elon Musk"
    },
    {
        tema: "Teorema de Pitágoras III",
        impartidor: "Steve Jobs"
    },
    {
        tema: "Areas en una curva",
        impartidor: "Nikola Tesla"
    },
    {
        tema: "Teorema de Pitágoras",
        impartidor: "Albert Einstein"
    },
    {
        tema: "Teorema de Pitágoras",
        impartidor: "Albert Einstein"
    }
];

export default function ClasesPorTema() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SecondaryHeader
                    title="Matemáticas"
                    subtitle="Líneas Rectas"
                ></SecondaryHeader>
            </Grid>
            <Grid item xs={12}>
                <p style={{ padding: "15px 0 10px 17px" }}>Clases Por Tema</p>
                {clases.map((clase, i) => (
                    <ClassItem
                        key={clase.tema + i}
                        tema={clase.tema}
                        impartidor={clase.impartidor}
                    ></ClassItem>
                ))}
            </Grid>
        </Grid>
    );
}
