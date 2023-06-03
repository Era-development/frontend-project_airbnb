/* skeletons */
const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(element => {
    element.classList.remove('skeleton');
  })
})


/* button-airbnb */
const buttonsAirBnb = document.querySelectorAll('.btn-airbnb');

buttonsAirBnb.forEach((button) => {
  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();

    const x = (e.clientX - rect.left) * 100 / button.clientWidth;
    const y = (e.clientY - rect.top) * 100 / button.clientHeight;

    button.style.setProperty('--mouse-x', x);
    button.style.setProperty('--mouse-y', y);
  })
})


/* иконки heart */
const hearts = document.querySelectorAll('.card-heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active');
  })
})


/* header links */
const links = document.querySelectorAll('.header-nav__link');

links.forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.header-nav__link.link-active').classList.remove('link-active');
    event.currentTarget.classList.add('link-active');
  })
})


/* init swiper banner */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* модалка become a host */
const modal = document.querySelector('#modal'); // получение доступа к модалке
const host = document.querySelector('#host'); // доступ к Become a host
const closeModal = document.querySelector('#close-button'); // доступ к кнопке Close Modal внутри модалки

host.addEventListener("click", () => {
  modal.showModal();
});


closeModal.addEventListener("click", () => {
  modal.close();
});





