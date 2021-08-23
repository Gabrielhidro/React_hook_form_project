// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    background-color: #1c1c1c;
    border-radius: 15px;
`;

export const Header = styled.div`
    position: relative;

    padding-top: 170px;

    background-color: #762186;
    border-radius: 15px;

    img {
        position: absolute;
        top: 40px;
        left: calc(50% - 162px);
    }
`;

export const Title = styled.h1`
    margin-top: 90px;
    
    color: #e0e0e0;
    text-align: center;
`;
