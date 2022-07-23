import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Class = styled(Link)`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 0.5rem 0;
    background-color: #5ace85;
    border-radius: 25px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;
