import Layout from "@/components/Layout";
import { GridContainer, Img, Item } from "./styles";

export default function ListOfSubs({ data }) {
    return (
        <Layout>
            <h2>Tus clases</h2>
            <GridContainer>
                {data.map((item) => (
                    <Item to={item.link} key={item.id} color={item.color}>
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
