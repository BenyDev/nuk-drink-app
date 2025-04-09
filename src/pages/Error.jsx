import React from 'react'
import Wrapper from '../wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't find page you looking for</p>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>something went wrong</div>
    </Wrapper>
  )
}

export default Error
