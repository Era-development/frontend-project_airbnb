/* карточки */
const fetchData = () => {
  return fetch('../data.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

const renderData = async () => {
  try {
    const products = await fetchData();
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (swiperWrapper) {
      products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');

        div.innerHTML = `
        <div class="array-wrapper">
        <a href="https://www.airbnb.co.uk/help/article/823?id=${product?.id}" target="_blank" rel="noopener noreferrer nofollow">
        <div class="card-array">
          <h3 class="card-text__name">${product?.name}</h3>
          <p class="card-text__description">${product?.description}</p>
       </div>
       </a>
      </div>
      <div class="array-wrapper">
        <a href="https://www.airbnb.co.uk/help/article/823?id=${product?.id}" target="_blank" rel="noopener noreferrer nofollow">
        <div class="card-array">
          <h3 class="card-text__name">${product?.name2}</h3>
          <p class="card-text__description">${product?.description2}</p>
       </div>
       </a>
      </div>
        `;

        swiperWrapper.appendChild(div);
      });
    } else {
      console.error('Element with class "swiper-wrapper" not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  initSwiper();
};


/* слайдер */
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
}

document.addEventListener('DOMContentLoaded', renderData);

/* skeletons */
const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(element => {
    element.classList.remove('skeleton');
  })
})


/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})


/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
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
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs-btn');
  const tabsContent = document.querySelectorAll('.tabs-content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs-btn__active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-btn__active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs-content__active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__active');
  }
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
