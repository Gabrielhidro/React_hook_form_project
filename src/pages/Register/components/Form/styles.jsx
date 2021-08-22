import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

    input,
    select {
        padding: 10px;
        width: 100%;

        color: #bebebe;
        outline: none;

        border-radius: 15px;
        border-width: 1px;
        border-style: solid;
        border-color: #652c9b;
        background: black;
    }
`

export const FormControl = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const Button = styled.button`
    width: 50%;
    padding: 10px;
    margin: 20px auto;

    color: white;
    
    background: #652c9b;
    border-radius: 15px;
    border: none;
`