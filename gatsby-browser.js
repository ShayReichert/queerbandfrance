import { wrapRootElement as wrap } from './root-wrapper'

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none'
  }, 1000)
}

export const wrapRootElement = wrap
