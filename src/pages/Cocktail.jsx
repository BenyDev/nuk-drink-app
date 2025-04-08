import React from 'react'
import axios from 'axios'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import Wrapper from '../wrappers/CocktailPage'
import { useQuery } from '@tanstack/react-query'
const searchDrinkByIdUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const searchCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const response = await axios.get(`${searchDrinkByIdUrl}${id}`)
      const { data } = response
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(searchCocktailQuery(id))

    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(searchCocktailQuery(id))
  if (!data) return <Navigate to="/" />

  const singleDrink = data.drinks[0]

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
        <Link to="/" className="btn">
          Back home
        </Link>
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

export default Cocktail
