import { Button, Container, FormControl } from "./styles";

export default function Form(){
    return (
        <Container>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Número do cartão" />
            <input type="data" placeholder="Válidade" />
            <FormControl>
                <input type="text" placeholder="cvv" />
                <select name="" id="">
                    <option value="">Selecione a bandeira</option>
                    <option value="">Visa</option>
                    <option value="">Master Card</option>
                    <option value="">American Express</option>
                </select>
            </FormControl>
            <Button>Cadastrar</Button>
        </Container>
    )
}