import Layout from "@/components/Layout";
import { GridContainer, Img, Item } from "./styles";

const data = [
    {
        id: 1,
        subject: "Matemáticas",
        in: "30 min",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=gif"
    },
    {
        id: 1,
        subject: "Habla Inglesa",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    },
    {
        id: 1,
        subject: "Habla Inglesa",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    }
];

export default function ListOfSubs() {
    return (
        <Layout>
            <h2>Tus clases</h2>
            <GridContainer>
                {data.map((item) => (
                    <Item key={item.id} color={item.color}>
                        <Img src={item.img} alt="" />
                        <section>
                            <h3>{item.subject}</h3>
                            <p>{item?.in}</p>
                        </section>
                    </Item>
                ))}
            </GridContainer>
        </Layout>
    );
}
