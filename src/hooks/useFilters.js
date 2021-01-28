export function stylesFilter(checkedStyles) {
  const styles = Array.from(document.querySelectorAll('.band-style'))
  const bandsCard = Array.from(document.querySelectorAll('.card'))

  function toggleClass() {
    const style = this.textContent
    this.classList.toggle('active')
    if (this.classList.contains('active')) {
      pushStyle(style)
    } else {
      removeStyle(style)
    }
  }

  function toggleClassOnEnterPress(e) {
    const style = this.textContent
    if (e.key === 'Enter') {
      this.classList.toggle('active')
      if (this.classList.contains('active')) {
        pushStyle(style)
      } else {
        removeStyle(style)
      }
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
      bandsCard.map((band) => {
        const bandsStyle = band.children[1].children[1].innerText
        if (checkedStyles.some((style) => bandsStyle.includes(style))) {
          return (band.style.display = '')
        } else {
          return (band.style.display = 'none')
        }
      })
    } else {
      // If no styles are checked, display all band cards
      bandsCard.map((band) => {
        return (band.style.display = '')
      })
    }
  }

  // eslint-disable-next-line
  styles.map((style) => {
    style.addEventListener('click', toggleClass)
    style.addEventListener('keypress', toggleClassOnEnterPress)
  })

  //// CLEAN USEEFFECT ////
  return function () {
    // eslint-disable-next-line
    styles.map((style) => {
      style.removeEventListener('click', toggleClass)
      style.removeEventListener('keypress', toggleClassOnEnterPress)
    })
  }
}

export function districtsFilter(checkedDistricts, allDistricts) {
  const bandsCard = Array.from(document.querySelectorAll('.card'))
  const districts = Array.from(document.querySelectorAll('[data-name]'))
  const displayNameBelow = document.querySelector('.gridmap')

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

  function toggleClassOnEnterPress(e) {
    const path = this.firstElementChild
    const district = this.dataset.name
    if (e.key === 'Enter') {
      path.classList.toggle('active')
      if (path.classList.contains('active')) {
        pushDistrict(district)
      } else {
        removeDistrict(district)
      }
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
      bandsCard.map((band) => {
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
      bandsCard.map((band) => {
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
    district.addEventListener('keypress', toggleClassOnEnterPress)
    district.addEventListener('mouseover', displayName)
    district.addEventListener('focus', displayName)
    district.addEventListener('mouseout', hideName)
  })

  //// CLEAN USEEFFECT ////
  return function () {
    // eslint-disable-next-line
    districts.map((district) => {
      district.removeEventListener('click', toggleClass)
      district.removeEventListener('keypress', toggleClassOnEnterPress)
      district.removeEventListener('mouseover', displayName)
      district.removeEventListener('focus', displayName)
      district.removeEventListener('mouseout', hideName)
    })
  }
}
