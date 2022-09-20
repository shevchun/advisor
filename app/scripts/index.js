import './markup-menu'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom'

global.$ = $
global.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody()
  custom()
})

// $(window).on('load resize', () => {
//   if ($(window).width() < 1200) {} 
// })
