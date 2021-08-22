// Components
import { CardImg } from '../../assets/Images';
import Form from "./components/Form";
import CardDatas from "./components/CardDatas";

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
            {context.page ? <CardDatas /> : <Form />}
        </Container>
    )
}