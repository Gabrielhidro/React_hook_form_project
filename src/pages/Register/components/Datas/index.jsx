import { useContext } from "react";
import { searchContext } from "../../../../context";
import { Container } from "./styles";

export default function Datas(){

    const context =  useContext(searchContext)
    const efeitoContext = context.efeito

    console.log(efeitoContext);

    return (
        <Container>
            {efeitoContext.map(e => {
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