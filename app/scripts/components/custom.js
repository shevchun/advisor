import $ from 'jquery'

export default () => {

  $('.js-scroll-top').on('click', () => {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $('[data-rate]').each((index, element) => {
    const val = $(element).attr('data-rate')
    const full = val.split('.')[0] || null
    const fraction = val.split('.')[1] || null
    $(element).find($('.rate__item-holder-inner')).each((i, item) => {
      if (i < +full) {
        $(item).addClass('active')
      }
      if ((i === +full) && fraction) {
        $(item).addClass('active').css('width', `${fraction}0%`)
      }
    })
  })

  $(window).scroll(function scroll() {
    const heightWindow = 50
    if ($(this).scrollTop() >= heightWindow) {
      $('.header').addClass('header--scroll')
    } else {
      $('.header').removeClass('header--scroll')
    }
  })
}