import RegisterPresentational from './presentational'
import React, { useContext } from 'react';
import { searchContext } from '../../context';

export default function Register(){
    const context = useContext(searchContext)

    return React.createElement(RegisterPresentational, {context})
  }