import $ from 'jquery'

export default () => {

  $('.we-rate__nav-row').on('click', function clickDownScroll() {
    if ($(window).width() < 1200) {
      const marginTop = 60
      const scrollEl = $(this)
      if ($(scrollEl).length !== 0) {
        $('html, body').animate(
          {
            scrollTop: $(scrollEl).offset().top - marginTop,
          },
          500
        )
      }
    }
  })

  $('.menu-item-has-children').on('click', function menuChildren() {
    if ($(window).width() < 1200) {
      $(this).toggleClass('active')
      return false
    }
    return null
  })

  $('.header__mobile-menu-btn').on('click', ()=> {
    $('.header').toggleClass('active')
    $('.menu-item-has-children').removeClass('active')
  })

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