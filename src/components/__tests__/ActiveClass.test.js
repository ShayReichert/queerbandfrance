test('Toggle "active" class on click on styles buttons', function () {
  document.addEventListener('DOMContentLoaded', function () {
    const firstButtons = document.querySelector('.band-style')
    expect(firstButtons).not.toBeNull()

    firstButtons.click()
    expect(firstButtons.toHaveClass('active'))
    firstButtons.click()
    expect(firstButtons.not.toHaveClass('active'))
  })
})

test('Toggle "active" class on click on districts buttons', function () {
  document.addEventListener('DOMContentLoaded', function () {
    const firstDistrict = document.querySelector('svg > g > g > path')
    expect(firstDistrict).not.toBeNull()

    firstDistrict.click()
    expect(firstDistrict.toHaveClass('active'))
    firstDistrict.click()
    expect(firstDistrict.not.toHaveClass('active'))
  })
})
