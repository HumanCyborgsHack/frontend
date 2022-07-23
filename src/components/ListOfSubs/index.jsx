import Layout from "@/components/Layout";
import { GridContainer, Img, Item } from "./styles";

export function Sub({
    color = "#f7beef",
    image = "/images/math.svg",
    subject = "Español II",
    startsIn = false
}) {
    return (
        <Item color={color}>
            <Img src={image} alt="" />
            <section>
                <h3>{subject}</h3>
                <p>{startsIn && startsIn}</p>
            </section>
        </Item>
    );
}

export default function ListOfSubs({ data }) {
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
