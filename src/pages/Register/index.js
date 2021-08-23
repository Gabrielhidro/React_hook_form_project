// Dependencies
import React from 'react';

// Presentational
import RegisterPagePresentational from './presentational'

// Enums
import { PageStepsEnum } from './enums';

export default function RegisterPage(){
  const [activeStep, setActiveStep] = React.useState(PageStepsEnum.FORM);

  function goToInfoStep() {
    setActiveStep(PageStepsEnum.INFO);
  }

  const [formData, setFormData] = React.useState()

  function updateFormData(values) {
    setFormData(values);
  }

  return React.createElement(RegisterPagePresentational, {
    activeStep,
    formData,

    goToInfoStep,
    updateFormData,
  });
}

// props
// constante
// estado
// funcoes