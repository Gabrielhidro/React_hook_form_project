// Dependencies
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

// Components
import { searchContext } from '../../../../context';

// Presentational
import FormPresentational from './presentational'

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

    return React.createElement(FormPresentational, {register, handleSubmit, subm })
}