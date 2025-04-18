import React from 'react'

import Wrapper from '../wrappers/CocktailList'
import CocktailCart from '../components/CocktailCart'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: 'center' }}>No matching cocktails found.</h4>
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCart key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CocktailList
