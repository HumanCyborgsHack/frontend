import Header from "@/components/Header";
import ListOfSubs from "./ListOfSubs";

const props = {
    name: "Pedro"
};

export default function Student1Page() {
    const { name } = props;
    return (
        <>
            <Header name={name}>
                <h3>¡Llegó la hora de aprender!</h3>
            </Header>
            <ListOfSubs />
        </>
    );
}
