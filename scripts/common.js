$(document).ready(() => {
  // Slider
  const slider = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    speed: 1300,
    autoplay: 1500,
    effect: 'slide',
    spaceBetween: 40,
  });

  // Clock
  const date = new Date('29 September, 2017 02:15:32');
  const now = new Date();
  const difference = date.getTime() / 1000 - now.getTime() / 1000;
  const clockEl = $('.clock');

  const clock = new FlipClock(clockEl, difference, {
    countdown: true,
    clockFace: 'DailyCounter',
    language: 'ru',
  });

  $('body a').click(e => e.preventDefault());

  // scroll to anchor
  $('a[href^="#"]').on('click', function() {
    const target = this.hash;
    const $target = $(target);

    $('html, body').animate(
      {
        scrollTop: $target.offset().top,
      },
      1500,
      'swing',
    );
  });

  // scroll to top
  $(window).on('scroll', () => {
    const offsetY = window.pageYOffset;
    if (offsetY >= 700) {
      $('.scrollTop').css({
        opacity: 1,
        bottom: 25,
        visibility: 'visible',
      });
    } else {
      $('.scrollTop').css({
        opacity: 0,
        bottom: '-50px',
        visibility: 'hidden',
      });
    }
  });

  $('.scrollTop').on('click', () => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      2000,
    );
  });

  // submit
  $('#form').submit(function (e) {
    e.preventDefault();
    const inputData = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: inputData.serialize(),
    })
      .done(() => alert('thank you'))
      .fail(() => alert('error'));
  });
});
