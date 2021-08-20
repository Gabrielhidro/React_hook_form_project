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
                <input type="text" placeholder="Nome" {...register("name")}/>
                <input type="text" placeholder="Número do cartão" {...register("cardNumber")}/>
                <input type="text" placeholder="Válidade" {...register("validate")}/>
                <FormControl>
                    <input type="text" placeholder="cvv" {...register("cvv")}/>
                    <select name="" id="" >
                        <option value="">Selecione a bandeira</option>
                        <option value="">Visa</option>
                        <option value="">Master Card</option>
                        <option value="">American Express</option>
                    </select>
                </FormControl>
                <Button>Cadastrar</Button>
            </Container>
        </>
    )
}