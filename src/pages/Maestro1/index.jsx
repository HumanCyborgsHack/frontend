import Header from "@/components/Header";
import ListOfSubs from "@/components/ListOfSubs";

const props = {
    name: "Ana Sofía"
};

const path = "/maestro-1";

const data = [
    {
        id: 1,
        subject: "Matemáticas",
        in: "En 30 min",
        color: "#688bdd",
        link: path + "/matematicas",
        img: "/images/math.webp"
    },
    {
        id: 2,
        link: path + "/ingles",
        img: "/assets/ALUMNO/HOME_MATERIAS/SeleccionArtesClase.png"
    },
    {
        id: 3,
        link: path + "/naturales",
        img: "/assets/ALUMNO/HOME_MATERIAS/SeleccionIdiomasClase.png"
    }
];

export default function Student1Page() {
    const { name } = props;
    return (
        <>
            <Header name={name}>
                <h3>¡Llegó la hora de enseñar!</h3>
            </Header>
            <ListOfSubs data={data} />
        </>
    );
}
