// Styled Components
import { Container } from "./styles";

export default function CardDatas(props){

    const { efeitoContext } = props

    return (
        <Container>
            {efeitoContext.map((e, i) => {
                return (
                <>
                    <li>Nome: {e.name}</li>
                    <li>Número do cartão: {e.cardNumber}</li>
                    <li>Data de Validade: {e.validate}</li>
                    <li>Código de Segurança: {e.cvv}</li>
                    <li>Bandeira: {e.flag}</li>
                </>
                )
            })}
        </Container>
    )
}