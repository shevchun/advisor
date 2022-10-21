import $ from 'jquery';
import 'slick-carousel';

export default () => {

  if ($('.casino-review__table-slider').length) {
    $('.casino-review__table-slider').slick({
      slidesToShow: 7,
      infinite: false,
      swipeToSlide: true,
      prevArrow: '<span class="slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M12.492 0.666687H5.50866C2.47533 0.666687 0.666992 2.47502 0.666992 5.50835V12.4834C0.666992 15.525 2.47533 17.3334 5.50866 17.3334H12.4837C15.517 17.3334 17.3253 15.525 17.3253 12.4917V5.50835C17.3337 2.47502 15.5253 0.666687 12.492 0.666687ZM14.442 9.44169L10.867 13.0167C10.742 13.1417 10.5837 13.2 10.4253 13.2C10.267 13.2 10.1087 13.1417 9.98366 13.0167C9.74199 12.775 9.74199 12.375 9.98366 12.1334L12.492 9.62502H4.00033C3.65866 9.62502 3.37533 9.34169 3.37533 9.00002C3.37533 8.65835 3.65866 8.37502 4.00033 8.37502H12.492L9.98366 5.86669C9.74199 5.62502 9.74199 5.22502 9.98366 4.98335C10.2253 4.74169 10.6253 4.74169 10.867 4.98335L14.442 8.55835C14.5587 8.67502 14.6253 8.83335 14.6253 9.00002C14.6253 9.16669 14.5587 9.32502 14.442 9.44169Z" /></svg></span>',
      nextArrow: '<span class="slick-next"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M12.492 0.666687H5.50866C2.47533 0.666687 0.666992 2.47502 0.666992 5.50835V12.4834C0.666992 15.525 2.47533 17.3334 5.50866 17.3334H12.4837C15.517 17.3334 17.3253 15.525 17.3253 12.4917V5.50835C17.3337 2.47502 15.5253 0.666687 12.492 0.666687ZM14.442 9.44169L10.867 13.0167C10.742 13.1417 10.5837 13.2 10.4253 13.2C10.267 13.2 10.1087 13.1417 9.98366 13.0167C9.74199 12.775 9.74199 12.375 9.98366 12.1334L12.492 9.62502H4.00033C3.65866 9.62502 3.37533 9.34169 3.37533 9.00002C3.37533 8.65835 3.65866 8.37502 4.00033 8.37502H12.492L9.98366 5.86669C9.74199 5.62502 9.74199 5.22502 9.98366 4.98335C10.2253 4.74169 10.6253 4.74169 10.867 4.98335L14.442 8.55835C14.5587 8.67502 14.6253 8.83335 14.6253 9.00002C14.6253 9.16669 14.5587 9.32502 14.442 9.44169Z" /></svg></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        }
      ]
    })
  }

  if ($('.popular-casinos__gallery-slider').length) {
    $('.popular-casinos__gallery-slider').slick({
      slidesToShow: 1,
      fade: true,
      prevArrow: '<span class="slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.51984 17.5601C9.13984 17.5601 8.75984 17.4201 8.45984 17.1201L1.39984 10.0601C0.819844 9.48007 0.819844 8.52007 1.39984 7.94007L8.45984 0.880068C9.03984 0.300068 9.99984 0.300068 10.5798 0.880068C11.1598 1.46007 11.1598 2.42007 10.5798 3.00007L4.57984 9.00007L10.5798 15.0001C11.1598 15.5801 11.1598 16.5401 10.5798 17.1201C10.2998 17.4201 9.91984 17.5601 9.51984 17.5601Z" /></svg></span>',
      nextArrow: '<span class="slick-next"><svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.51984 17.5601C9.13984 17.5601 8.75984 17.4201 8.45984 17.1201L1.39984 10.0601C0.819844 9.48007 0.819844 8.52007 1.39984 7.94007L8.45984 0.880068C9.03984 0.300068 9.99984 0.300068 10.5798 0.880068C11.1598 1.46007 11.1598 2.42007 10.5798 3.00007L4.57984 9.00007L10.5798 15.0001C11.1598 15.5801 11.1598 16.5401 10.5798 17.1201C10.2998 17.4201 9.91984 17.5601 9.51984 17.5601Z" /></svg></span>',
      asNavFor: '.popular-casinos__gallery-slider-nav',
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            arrows: false
          }
        }
      ]
    })

    $('.popular-casinos__gallery-slider-nav').slick({
      slidesToShow: 4,
      focusOnSelect: true,
      arrows: false,
      asNavFor: '.popular-casinos__gallery-slider',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })
  }

  const providersSettings = {
    slidesToShow: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: "unslick"
      }
    ]
  }
  const providersSlider = $('.providers__list').slick(providersSettings);

  $(window).on('load resize', () => {
    if ($(window).width() < 1200 && !providersSlider.hasClass('slick-initialized')) {
      $(providersSlider).slick(providersSettings);
    }
  })

  if ($('.featured__slider').length) {
    $('.featured__slider').slick({
      slidesToShow: 1,
      fade: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 100
    });
  }

  if ($('.slider__list').length) {
    $('.slider__list').each((i, element) => {
      const allItems = $(element).find('.slider__item').length
      $(element).parents('.slider').find('.counter-all').text(allItems < 10 ? `0${allItems}` : allItems)
      $(element).parents('.slider').find('.counter-progress-line').css('width', `${100 / allItems}%`)

      $(element).slick({
        infinite: false,
        slidesToShow: 1,
        prevArrow: '<span class="slick-prev"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
        nextArrow: '<span class="slick-next"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
        appendArrows: $(element).parents('.slider').find('.slider__arrows')
      });

      $(element).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        $(element).parents('.slider').find('.counter-current').text((nextSlide + 1) < 10 ? `0${(nextSlide + 1)}` : (nextSlide + 1))
        $(element).parents('.slider').find('.counter-progress-line').css('width', `${100 / allItems * (nextSlide + 1)}%`)
      })

      $(window).on('load resize', () => {
        if ($(window).width() < 1200) {
          $($(element).parents('.slider').find('.slider__arrows')).append($(element).parents('.slider').find('.counter'))
        } else {
          $($(element).parents('.slider').find('.slider__top')).append($(element).parents('.slider').find('.counter'))
        }
      })
    })
  }

  if ($('.event__slider').length) {
    $('.event__slider').each((i, element) => {
      const allItems = $(element).find('.event__slider-item').length
      $(element).parents('.event__left').find('.counter-all').text(allItems < 10 ? `0${allItems}` : allItems)
      $(element).parents('.event').find('.counter-progress-line').css('width', `${100 / allItems}%`)

      $(element).slick({
        infinite: false,
        slidesToShow: 1,
        fade: true,
        prevArrow: '<span class="slick-prev"><svg width="17" height="30" viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg"><path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857866C15.3611 0.0768167 14.0948 0.0768166 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" /></svg></span>',
        nextArrow: '<span class="slick-next"><svg width="17" height="30" viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg"><path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857866C15.3611 0.0768167 14.0948 0.0768166 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z" /></svg></span>',
      });

      $(element).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        $(element).parents('.event__left').find('.counter-current').text((nextSlide + 1) < 10 ? `0${(nextSlide + 1)}` : (nextSlide + 1))
        $(element).parents('.event').find('.counter-progress-line').css('width', `${100 / allItems * (nextSlide + 1)}%`)
      });
    })
  }

  if ($('.review-slider__list').length) {
    $('.review-slider__list').each((i, element) => {
      const allItems = $(element).find('.review-slider__item').length
      $(element).parents('.review-slider').find('.counter-all').text(allItems < 10 ? `0${allItems}` : allItems)
      $(element).parents('.review-slider').find('.counter-progress-line').css('width', `${100 / allItems}%`)

      $(element).slick({
        infinite: false,
        slidesToShow: 1,
        prevArrow: '<span class="slick-prev"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
        nextArrow: '<span class="slick-next"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
        appendArrows: $(element).parents('.review-slider').find('.review-slider__arrows'),
      });

      $(element).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        $(element).parents('.review-slider').find('.counter-current').text((nextSlide + 1) < 10 ? `0${(nextSlide + 1)}` : (nextSlide + 1))
        $(element).parents('.review-slider').find('.counter-progress-line').css('width', `${100 / allItems * (nextSlide + 1)}%`)
      });

      $(window).on('load resize', () => {
        if ($(window).width() < 1200) {
          $($(element).parents('.review-slider').find('.review-slider__arrows')).append($(element).parents('.review-slider').find('.counter'))
        } else {
          $($(element).parents('.review-slider').find('.review-slider__top')).append($(element).parents('.review-slider').find('.counter'))
        }
      })
    })
  }

}
