// Dependencies
import { useContext } from "react";

// Components
import { searchContext } from "../../../../context";

// Styled Components
import { Container } from "./styles";

export default function CardDatas(){

    const { convertArr } =  useContext(searchContext)


    return (
        <Container>
            {convertArr.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>Nome: {item.name}</li>
                        <li>Número do cartão: {item.cardNumber}</li>
                        <li>Data de Validade: {item.validate}</li>
                        <li>Código de Segurança: {item.cvv}</li>
                        <li>Bandeira: {item.flag}</li>
                    </ul>
                )
            })}
        </Container>
    )
}