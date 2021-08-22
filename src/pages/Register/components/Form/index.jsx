// Dependencies
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

// Components
import { searchContext } from '../../../../context';

// Presentational
import FormPresentational from './presentational'

export default function Form(){
    const [ result, setResult ] = useState('');
    const { register, handleSubmit } = useForm();
    const {changePage, setConvertArr} = useContext(searchContext)

    const submitForm = (item) => {
        setResult(item);
        changePage()
    }

    useEffect(() => {
        setConvertArr([result])
   }, [result])

    return React.createElement(FormPresentational, {register, handleSubmit, submitForm })
}