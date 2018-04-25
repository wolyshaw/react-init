import { isClient } from '@/utils'

var times = 0

export var openLoading = function openLoading() {
  if (isClient) {
    var loadingElement = document.querySelector('#loading')
    if (loadingElement) {
      loadingElement.classList.add('visible')
    }
    times++
  }
}

export var closeLoading = function closeLoading() {
  if (isClient) {
    var loadingElement = document.querySelector('#loading')
    times--
    if (loadingElement && times <= 0) {
      loadingElement.classList.remove('visible')
    }
  }
}