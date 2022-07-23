import styled from "@emotion/styled";

export const Video = styled.iframe`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 2rem;
    aspect-ratio: 4/3;
`;

export const Details = styled.div`
    display: flex;
    margin: 1rem;
    padding: 0.5rem 2rem;
    background-color: #bcca8d;
    border-radius: 1rem;
    justify-content: space-between;
    align-items: center;
    & img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
    }
`;
