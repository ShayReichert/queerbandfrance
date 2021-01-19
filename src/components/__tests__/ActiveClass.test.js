test('Toggle "active" class on click on styles buttons', function () {
  const styleButtons = Array.from(document.querySelectorAll('.band-style'))
  expect(styleButtons).not.toBeNull()

  styleButtons.map((styleButton) => {
    styleButton.click()
    expect(styleButton.toHaveClass('active'))
    styleButton.click()
    expect(styleButton.not.toHaveClass('active'))
  })
})

test('Toggle "active" class on click on districts buttons', function () {
  const districtsButtons = Array.from(document.querySelectorAll('path'))
  expect(districtsButtons).not.toBeNull()
})
// Continuer à écrire ce test
