import $ from 'jquery';
import 'slick-carousel';

export default () => {

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
        appendArrows: $(element).parents('.slider').find('.slider__arrows'),
        // responsive: [
        //   {
        //     breakpoint: 1200,
        //     settings: {
        //       slidesToShow: 1,
        //     }
        //   }
        // ]
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
