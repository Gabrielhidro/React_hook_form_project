// Dependencies
import React, { useContext } from 'react';

// Components
import { searchContext } from '../../context';

// Presentational
import RegisterPresentational from './presentational'

export default function Register(){
    const context = useContext(searchContext)

    return React.createElement(RegisterPresentational, {context})
  }