import $ from 'jquery'

export default () => {

  $('.accordion__item-head').on('click', function faqItem() {
    $(this).parents('.accordion__item').toggleClass('active')
    $(this).siblings('.accordion__item-body').slideToggle()
  })

  $('.faq__item-head').on('click', function faqItem() {
    $(this).parents('.faq__item').toggleClass('active')
    $(this).siblings('.faq__item-body').slideToggle()
  })

  if ($('.js-sticky').length) $('.wrapper').addClass('wrapper--ovv')

  if ($(window).width() < 1200) {
    $('.we-rate__nav-row').on('click', function clickDownScroll() {
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
    })

    $('.menu-item-has-children > a').on('click', function menuChildren() {
      $(this).parent('.menu-item-has-children').toggleClass('active')
      return false
    })

    $('.casino__table-country-item--all').on('click', function countryAll(event) {
      event.stopPropagation()
      $(this).toggleClass('active')
    })

    $(document).on("click", (event) => {
      event.stopPropagation()
      $('.casino__table-country-item--all').removeClass('active')
    })
  }


  $('.header__mobile-menu-btn').on('click', () => {
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