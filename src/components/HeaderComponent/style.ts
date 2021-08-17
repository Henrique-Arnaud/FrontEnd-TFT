import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    align-items: center;
    img{
        height: 220px;
        width: 410px;
        border-radius: 5px;
    }
    h1{
        margin-top: 3vh;
        font-size: 2.1rem;
    }
    @media(max-width: 767px){
        img{
            width: 90%;
            height: 23vh;
        }
    }
`;