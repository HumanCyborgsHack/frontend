import Header from "@/components/Header";
import ListOfSubs from "@/components/ListOfSubs";

const props = {
    name: "Pedro"
};

const data = [
    {
        id: 1,
        subject: "Matemáticas",
        in: "30 min",
        color: "#66d399",
        link: "/matematicas",
        img: "https://thecatapi.com/api/images/get?format=src&type=gif"
    },
    {
        id: 2,
        subject: "Habla Inglesa",
        color: "#d39966",
        link: "/ingles",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    },
    {
        id: 3,
        subject: "Ciencias Naturales",
        color: "#a876ef",
        link: "/naturales",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
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
