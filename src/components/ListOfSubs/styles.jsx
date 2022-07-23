import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 20px 0 70px 0;
    & a:first-child {
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        grid-column: 1 / span 2;
        & section {
            font-size: 1.2rem;
            position: absolute;
            right: 1rem;
            text-align: right;
        }
        & img {
            width: 50%;
        }
    }
`;

export const Item = styled(Link)(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        borderRadius: "40px"
    },
    (props) => ({ backgroundColor: props.color })
);
/*
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    */
export const Img = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;
