import $ from 'jquery'
import 'select2';

export default () => {

  $('.init-select2').each((index, element) => {
    $(element).select2({
      minimumResultsForSearch: -1,
      dropdownParent: $(element).parents('.js-parent-select'),
      placeholder: $(element).parents('.js-parent-select').attr('data-placeholder')
    })
  })

}