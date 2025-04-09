import React from 'react'
import Wrapper from '../wrappers/CocktailPage'
const RandomCocktail = ({ drink: singleDrink }) => {
  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  let ingredientsList = []
  for (let index = 1; index <= 15; index++) {
    const attrName = `strIngredient${index}`
    const ingredient = singleDrink[attrName]
    if (ingredient) ingredientsList.push(ingredient)
  }
  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data"> category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data"> info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data"> glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredientsList.join(', ')}
          </p>

          <p>
            <span className="drink-data"> instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default RandomCocktail
