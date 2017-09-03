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
  const difference = (date.getTime() / 1000) - (now.getTime() / 1000);
  const clockEl = $('.clock');

  const clock = new FlipClock (clockEl, difference, {
    countdown: true,
    clockFace: 'DailyCounter',
    language: 'ru',
  });

  $('body').click(e => e.preventDefault());
});
