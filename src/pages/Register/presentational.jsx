// Components
import { Form, CardDatas } from './components';

// Styled Components
import { Container, Title, Header } from "./styles";

// Enums
import { PageStepsEnum } from './enums';

// Assets
import { CardImg } from '../../assets/Images';

export default function Register(props){
  const { 
    activeStep,
    formData,

    goToInfoStep,
    updateFormData,
  } = props

  function renderStep() {
    if (activeStep === PageStepsEnum.INFO) {
      return <CardDatas formData={formData} />;
    }

    return <Form updateFormData={updateFormData} goToInfoStep={goToInfoStep} />;
  }

  return (
    <Container>
      <Header>
        <img src={CardImg} alt="Credit card" />
      </Header>

      <Title>Dados do cartão</Title>

      {renderStep()}
    </Container>
  );
}