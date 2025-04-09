import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RandomCocktail from '../components/RandomCocktail'

const searchRandCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const searchRandCocktailQuery = () => {
  return {
    queryKey: ['rand'],
    queryFn: async () => {
      const response = await axios.get(searchRandCocktailUrl)
      return response.data.drinks
    },
  }
}

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(searchRandCocktailQuery())
}

const RandCocktail = () => {
  useLoaderData()
  const {
    data: drinks,
    isLoading,
    refetch,
  } = useQuery({
    ...searchRandCocktailQuery(),
    keepPreviousData: true,
  })
  const randDrink = drinks?.[0]

  //   const queryClient = useQueryClient()
  const handClick = async () => {
    // await queryClient.invalidateQueries(['rand'])
    await refetch()
  }

  return (
    <section
      style={{
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
          marginTop: '3rem',
        }}
      >
        {!isLoading && <RandomCocktail drink={randDrink} />}
        <button className="btn" onClick={() => handClick()}>
          draw cocktail
        </button>
      </div>
    </section>
  )
}

export default RandCocktail
