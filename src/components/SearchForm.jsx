import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../wrappers/SearchForm'
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form" method="GET">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button
          type="submit"
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Searching' : 'Search'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
