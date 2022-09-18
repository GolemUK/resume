$(document).ready(function () {
  $('.coffee').on('click', function () {
    $('.coffee').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
});
