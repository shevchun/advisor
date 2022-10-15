import $ from 'jquery'

export default () => {

  $('.js-filter-btn').on('click', () => {
    $('.casino-filter').addClass('active')
  })

  $('.js-close-filter').on('click', () => {
    $('.casino-filter').removeClass('active')
  })

  $('.casino-filter__checkbox').each((index, element) => {
    const items = $(element).find('.casino-filter__checkbox-item').length
    if (items > 12) {
      $(element).addClass('active-show-more')
    }
  })

  $('.casino-filter__show-btn').on('click', function showMore() {
    $(this).parents('.casino-filter__checkbox').toggleClass('show-more')
  })

  function isFloat(value) {
    return typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value);
  }

  $('[data-rate]').each((index, element) => {
    let val = $(element).attr('data-rate')
    if (!isFloat(val)) {
      val = parseFloat(val).toFixed(1)
    }
    const full = val.split('.')[0] || null
    const fraction = val.split('.')[1] || null
    $(element).find($('.rate__item-holder-inner')).each((i, item) => {
      if (i <= full) {
        $(item).addClass('active')
      }
      if (i === +full) {
        $(item).addClass('active').css('width', `${fraction}0%`)
      }
    })
  })

  $('.general-info__accordion-item-head').on('click', function generalItem() {
    $(this).parents('.general-info__accordion-item').toggleClass('active')
    $(this).siblings('.general-info__accordion-item-body').slideToggle()
  })

  $('.accordion__item-head').on('click', function accordionItem() {
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

  // $('[data-rate]').each((index, element) => {
  //   const val = $(element).attr('data-rate')
  //   const full = val.split('.')[0] || null
  //   const fraction = val.split('.')[1] || null
  //   $(element).find($('.rate__item-holder-inner')).each((i, item) => {
  //     if (i < +full) {
  //       $(item).addClass('active')
  //     }
  //     if ((i === +full) && fraction) {
  //       $(item).addClass('active').css('width', `${fraction}0%`)
  //     }
  //   })
  // })

  $(window).scroll(function scroll() {
    const heightWindow = 50
    if ($(this).scrollTop() >= heightWindow) {
      $('.header').addClass('header--scroll')
    } else {
      $('.header').removeClass('header--scroll')
    }
  })
}