// Dependencies
import { useContext } from "react";

// Components
import { CardImg } from '../../assets/Images';
import Form from "./components/Form";
import Datas from "./components/Datas";
import { searchContext } from "../../context";

// Styled Components
import { Container, Title, Header } from "./styles";

export default function Register(props){

    const { context } = props

    return (
        <Container>
            <Header>
                <img src={CardImg} alt="Credit card" />
            </Header>
            <Title>Dados do cartão</Title>
            {context.page ? <Datas /> : <Form />}
        </Container>
    )
}