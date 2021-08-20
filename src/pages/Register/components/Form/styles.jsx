import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

    input,
    select {
        padding: 10px;
        border-radius: 15px;
        border: 1px solid #652c9b;
        background: black;
        color: #bebebe;
        width: 100%;
        outline: none;
    }
`

export const FormControl = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const Button = styled.button`
    width: 50%;
    background: #652c9b;
    border-radius: 15px;
    color: white;
    border: none;
    padding: 10px;
    margin: 20px auto;
`