import { styled } from "@mui/material/styles";
import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";

const ProgressBar = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#eeebed"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#dd88d1"
    }
}));

export default ProgressBar;
