// Dependencies
import React from 'react'
import { useForm } from 'react-hook-form';

// Presentational
import FormPresentational from './presentational'

export default function Form(props){
  const {
    updateFormData,
    goToInfoStep,
  } = props

  const { register, handleSubmit } = useForm();

  function updateInfo(values) {
    updateFormData(values);
    goToInfoStep();
  }

  return React.createElement(FormPresentational, {
    register,
    handleSubmit,
    
    updateInfo,
  })
}