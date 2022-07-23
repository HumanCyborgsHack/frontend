import { Class, List } from "./styles";
import ArrowIcon from "@mui/icons-material/ArrowCircleRight";

export default function ListOfClasses({ data }) {
    return (
        <List>
            {data.map((item) => (
                <Class to={item.link} key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <ArrowIcon />
                </Class>
            ))}
        </List>
    );
}
