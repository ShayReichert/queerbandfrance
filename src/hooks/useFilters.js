export function stylesFilter(styles, bands) {
  const checkedStyles = []

  function toggleClass() {
    const style = this.textContent
    this.classList.toggle('active')
    if (this.classList.contains('active')) {
      pushStyle(style)
    } else {
      removeStyle(style)
    }
  }

  function pushStyle(style) {
    checkedStyles.push(style)
    handleDisplayBands(checkedStyles)
  }

  function removeStyle(style) {
    const index = checkedStyles.indexOf(style)
    if (index > -1) {
      checkedStyles.splice(index, 1)
    }
    handleDisplayBands(checkedStyles)
  }

  function handleDisplayBands(checkedStyles) {
    if (checkedStyles.length > 0) {
      bands.map((band) => {
        const bandsStyle = band.children[1].children[1].innerText
        if (checkedStyles.some((style) => bandsStyle.includes(style))) {
          return (band.style.display = '')
        } else {
          return (band.style.display = 'none')
        }
      })
    } else {
      // if no styles are checked, display all band cards
      bands.map((band) => {
        return (band.style.display = '')
      })
    }
  }

  styles.map((style) => {
    return style.addEventListener('click', toggleClass)
  })

  // CLEAN USEEFFECT
  return function () {
    styles.map((style) => {
      return style.removeEventListener('click', toggleClass)
    })
  }
}

export function districtsFilter(
  districts,
  bands,
  displayNameBelow,
  allDistricts
) {
  let checkedDistricts = []

  function toggleClass() {
    const path = this.firstElementChild
    const district = this.dataset.name
    path.classList.toggle('active')
    if (path.classList.contains('active')) {
      pushDistrict(district)
    } else {
      removeDistrict(district)
    }
  }

  function pushDistrict(district) {
    checkedDistricts.push(district)
    handleDisplayDistricts(checkedDistricts)
  }

  function removeDistrict(district) {
    const index = checkedDistricts.indexOf(district)
    if (index > -1) {
      checkedDistricts.splice(index, 1)
    }
    handleDisplayDistricts(checkedDistricts)
  }

  function handleDisplayDistricts(checkedDistricts) {
    if (checkedDistricts.length > 0) {
      bands.map((band) => {
        const bandsDistrict = band.children[1].children[2].innerText
        if (
          checkedDistricts.some((district) => bandsDistrict.includes(district))
        ) {
          return (band.style.display = '')
        } else {
          return (band.style.display = 'none')
        }
      })
    } else {
      // if no styles are checked, display all band cards
      bands.map((band) => {
        return (band.style.display = '')
      })
    }
  }

  function displayName() {
    const hoverDistrict = this.dataset.name
    const matchDistrict = allDistricts.filter(
      (district) => district.fieldValue === hoverDistrict
    )
    const totalBands =
      matchDistrict.length > 0 ? matchDistrict[0].totalCount : 0

    displayNameBelow.innerHTML = `${hoverDistrict} : ${totalBands}`
  }

  function hideName() {
    displayNameBelow.innerHTML = ``
  }

  // eslint-disable-next-line
  districts.map((district) => {
    district.addEventListener('click', toggleClass)
    district.addEventListener('mouseover', displayName)
    district.addEventListener('mouseout', hideName)
  })

  // CLEAN USEEFFECT
  return function () {
    // eslint-disable-next-line
    districts.map((district) => {
      district.removeEventListener('click', toggleClass)
      district.removeEventListener('mouseover', displayName)
      district.removeEventListener('mouseout', hideName)
    })
  }
}
