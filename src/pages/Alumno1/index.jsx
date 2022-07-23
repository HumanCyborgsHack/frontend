import Header from "./Header";
import ListOfSubs from "./ListOfSubs";

const props = {
    name: "Pedro"
};

export default function Student1Page() {
    const { name } = props;
    return (
        <>
            <Header name={name} />
            <ListOfSubs />
        </>
    );
}
