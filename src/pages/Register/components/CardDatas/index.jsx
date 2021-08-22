// Dependencies
import React, { useContext } from 'react'

// Components
import { searchContext } from '../../../../context'

// Presentational
import CardDatasPresentational from './presentational'

export default function CardDatas(){

    const context =  useContext(searchContext)
    const efeitoContext = context.efeito

    return React.createElement(CardDatasPresentational, {efeitoContext})
}