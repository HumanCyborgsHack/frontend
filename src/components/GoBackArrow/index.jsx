import ArrowBackIcon from "@mui/icons-material/ArrowBackRounded";
import { LinkButton } from "./styles";

export default function GoBackArrow() {
    function handleClick() {
        window.history.back();
    }
    return <LinkButton onClick={handleClick}>{<ArrowBackIcon />}</LinkButton>;
}
