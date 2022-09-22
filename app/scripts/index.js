import './markup-menu'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom'
import sliders from './components/sliders'
import Tabs from './components/tabs'

global.$ = $
global.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody()
  global.Tabs = new Tabs()
  sliders()
  custom()
})

// $(window).on('load resize', () => {
//   if ($(window).width() < 1200) {} 
// })
