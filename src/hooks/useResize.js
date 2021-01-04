export function resizeNames(allNames, cardMaxWidth) {
  allNames.forEach((name) => {
    const nameWidth = parseInt(getComputedStyle(name).width)

    if (nameWidth > cardMaxWidth) {
      const difference = nameWidth - cardMaxWidth
      let className
      if (difference >= 200) {
        className = 'smaller1'
      } else if (difference >= 150 && difference < 200) {
        className = 'smaller2'
      } else if (difference >= 100 && difference < 150) {
        className = 'smaller3'
      } else if (difference >= 50 && difference < 100) {
        className = 'smaller4'
      } else {
        className = 'smaller5'
      }
      return name.classList.add(className)
    }
  })
}
