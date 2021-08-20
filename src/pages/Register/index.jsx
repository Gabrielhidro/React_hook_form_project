import { Container, Title, Header } from "./styles";
import { CardImg } from '../../assets/Images';
import Form from "./components/Form";
import Datas from "./components/Datas";
import { useContext } from "react";
import { searchContext } from "../../context";

export default function Register(){

    const context = useContext(searchContext)

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