import { isClient } from '@/utils'

let times = 0

export const openLoading = () => {
  if (isClient) {
    let loadingElement = document.querySelector('#loading')
    if (!loadingElement) {
      loadingElement = document.createElement('div')
      loadingElement.id = 'loading'
    }
    loadingElement.classList.add('visible')
    times++
  }
}

export const closeLoading = () => {
  if (isClient) {
    let loadingElement = document.querySelector('#loading')
    times--
    if (loadingElement && times <= 0) {
      loadingElement.classList.remove('visible')
    }
  }
}
