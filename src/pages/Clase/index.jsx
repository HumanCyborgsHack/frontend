import ListOfClasses from "@/components/ListOfClasses";
import Header from "@/components/Header";

const path = "/alumno-1/matematicas";

const data = [
    {
        id: 1,
        name: "",
        img: "/assets/ALUMNO/CLASES/LineasRectas.png",
        link: path + "/lineas-rectas"
    },
    {
        id: 2,
        name: "",
        img: "/assets/ALUMNO/CLASES/Angulos.png",
        link: path + "/angulos"
    },
    {
        id: 3,
        name: "",
        img: "/assets/ALUMNO/CLASES/Figuras.png",
        link: path + "/figuras"
    }
];

export default function Clase() {
    return (
        <>
            <Header isBack searchDisabled>
                <h1>Matemáticas</h1>
            </Header>
            <ListOfClasses data={data} />
        </>
    );
}
