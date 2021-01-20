import React from 'react'
import Cookie from '../Cookie'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'

test('Display cookie component ok', function () {
  render(<Cookie />)
  const cookie = document.querySelector('.cookie-container')
  expect(cookie).not.toBeNull()
})

test('Close the cookie component when button clicked', function () {
  render(<Cookie />)
  const cookie = screen.getByText(
    "Ce site Web utilise des cookies pour améliorer l'expérience utilisateur."
  )
  const button = document.body.querySelector("[aria-label='Accept cookies']")
  fireEvent.click(button)
  expect(cookie).not.toBeInTheDocument()
})
