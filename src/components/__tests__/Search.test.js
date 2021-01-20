import React from 'react'
import Header from '../Header'
import { render } from '@testing-library/react'

test('Display search bar on header', function () {
  render(<Header />)
  const searchBar = document.querySelector('input')
  expect(searchBar).not.toBeNull()
})
