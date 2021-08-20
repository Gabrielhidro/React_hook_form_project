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
                    <li>{e.name}</li>
                    <li>{e.cardNumber}</li>
                    <li>{e.validate}</li>
                    <li>{e.cvv}</li>
                </>
                )
            })}
        </Container>
    )
}