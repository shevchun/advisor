import './markup-menu'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom'
import sliders from './components/sliders'
import select2 from './components/select2'
import Tabs from './components/tabs'

global.$ = $
global.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  global.Tabs = new Tabs()
  svg4everybody()
  select2()
  sliders()
  custom()
})

$(window).on('load resize', () => {
  if ($(window).width() < 1200) {
    $('.header__mobile').append($('.header__nav'))
    $('.header__mobile').append($('.header__btn'))
    $('.we-rate__nav-row').each((index, element) => {
      $(element).append($('.we-rate__options-box').parent('.tab')[index])
    })
  } else {
    $('.header__center').append($('.header__nav'))
    $('.header__btn').insertBefore($('.header__mobile-menu-btn'))
    $('.we-rate__options').append($('.we-rate__nav-row .tab'))
  }
})
