/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})


/* клик вне пунктов меню */
document.addEventListener('click', (event) => {
  if(!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
    dropDownMenu.classList.remove('dropdown-show');
  }
})




/* help-search */
const inputSearch = document.querySelector('.input-search');
const searchMenu = document.querySelector('.search-menu');

/* вкл/выкл выпадающего списка */
inputSearch.addEventListener('click', () => {
  searchMenu.classList.add('search-show');
})

// закрытие выпадающего списка по клику на пункты меню
const searchArticles = document.querySelectorAll('.search-menu__items');
searchArticles.forEach(item => {
  item.addEventListener('click', () => {
    searchMenu.classList.remove('search-show');
  })
})

/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-menu') && !event.target.closest('.input-search')) {
    searchMenu.classList.remove('search-show');
  }
})


/* tabs */
const buttonTabs = document.querySelectorAll('.button-tabs');

buttonTabs.forEach(button => {
  button.addEventListener('click', event => {
    document.querySelector('.button-tabs.tabs-active').classList.remove('tabs-active');
    event.currentTarget.classList.add('tabs-active');
  })
})



/* log-in_link */
const buttonsAirBnb = document.querySelectorAll('.log-in_link');

buttonsAirBnb.forEach((link) => {
  link.addEventListener('mousemove', e => {
    const rect = link.getBoundingClientRect();

    const x = (e.clientX - rect.left) * 100 / link.clientWidth;
    const y = (e.clientY - rect.top) * 100 / link.clientHeight;

    link.style.setProperty('--mouse-x', x);
    link.style.setProperty('--mouse-y', y);
  })
})

