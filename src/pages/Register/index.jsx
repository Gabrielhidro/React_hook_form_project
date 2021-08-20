import { Container, Title, Header } from "./styles";
import { CardImg } from '../../assets/Images'
import Form from "./components/Form";

export default function Register(){
    return (
        <Container>
            <Header>
                <img src={CardImg} alt="Credit card" />
            </Header>
            <Title>Dados do cartão</Title>
            <Form />
        </Container>
    )
}