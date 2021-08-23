// Styled Components
import { Button, Container, FormControl } from "./styles";

export default function Form(props){
  const {
    register,
    handleSubmit,
    
    updateInfo,
  } = props

  return (
    <Container onSubmit={handleSubmit(updateInfo)}>
      <input
        {...register('name', {
          required: true,
        })}
        type="text"
        placeholder="Nome"
      />

      <input
        {...register('cardNumber', {
          required: true,
        })}
        type="text"
        placeholder="Número do cartão"
      />

      <input
        {...register('expirationDate', {
          required: true,
        })}
        type="text"
        placeholder="Validade"
      />

      <FormControl>
        <input
          {...register('cvv', {
            required: true,
          })}
          type="text"
          placeholder="CVV"
        />

        <select
          {...register('flag', {
            required: true,
          })}
        >
          <option value="">Selecione a bandeira</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="American Express">American Express</option>
        </select>
      </FormControl>

      <Button type='submit'>Cadastrar</Button>
    </Container>
  );
}