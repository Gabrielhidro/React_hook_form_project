// Styled Components
import { Container } from "./styles";

export default function CardDatas(props){
  const { formData } = props

  return (
    <Container>
      <ul>
        <li>Nome: {formData?.name}</li>
        <li>Número do cartão: {formData?.cardNumber}</li>
        <li>Data de Validade: {formData?.expirationDate}</li>
        <li>Código de Segurança: {formData?.cvv}</li>
        <li>Bandeira: {formData?.flag}</li>
      </ul>
    </Container>
  );
}