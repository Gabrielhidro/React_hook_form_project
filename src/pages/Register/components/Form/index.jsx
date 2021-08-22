import { Button, Container, FormControl } from "./styles";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../../../../context";


export default function Form(){
    const { register, handleSubmit } = useForm();
    const [ result, setResult ] = useState('');

    const subm = async (item) => {
        setResult(item);
        context.changePage()
    }

    const context = useContext(searchContext)

     useEffect(() => {
        context.setEfeito([result])
    }, [result])


    return (
        <>
            <Container onSubmit={handleSubmit(subm)}>
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