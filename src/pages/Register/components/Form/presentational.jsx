// Styled Components
import { Button, Container, FormControl } from "./styles";

export default function Form(props){

    const { register, handleSubmit, submitForm } = props

    return (
        <>
            <Container onSubmit={handleSubmit(submitForm)}>
                <input type="text" placeholder="Nome" required {...register("name")}/>
                <input type="text" placeholder="Número do cartão" required="16" {...register("cardNumber")}/>
                <input type="text" placeholder="Válidade" required {...register("validate")}/>
                <FormControl>
                    <input type="text" placeholder="cvv" required {...register("cvv")}/>
                    <select name="" id="" required {...register("flag")}>
                        <option value="">Selecione a bandeira</option>
                        <option value="Visa">Visa</option>
                        <option value="Master Card">Master Card</option>
                        <option value="American Express">American Express</option>
                    </select>
                </FormControl>
                <Button>Cadastrar</Button>
            </Container>
        </>
    )
}