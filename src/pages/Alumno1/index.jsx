import Header from "@/components/Header";
import ListOfSubs from "@/components/ListOfSubs";

const props = {
    name: "Pedro"
};

const path = "/alumno-2";

const data = [
    {
        id: 1,
        subject: "Matemáticas",
        in: "En 30 min",
        color: "#688bdd",
        link: path,
        img: "/images/math.webp"
    },
    {
        id: 2,
        link: path,
        img: "/assets/ALUMNO/HOME_MATERIAS/SeleccionArtesClase.png"
    },
    {
        id: 3,
        link: path,
        img: "/assets/ALUMNO/HOME_MATERIAS/SeleccionIdiomasClase.png"
    }
];

export default function Student1Page() {
    const { name } = props;
    return (
        <>
            <Header name={name}>
                <h3>¡Llegó la hora de aprender!</h3>
            </Header>
            <ListOfSubs data={data} />
        </>
    );
}
