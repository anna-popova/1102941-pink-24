document.addEventListener('DOMContentLoaded', function (event) {
  console.log('Javascript works!');

  //
  // NOTE! Если включен javascript добавить эти классы
  // - класс 'site-list__item--js-enabled' элементам site-list__item
  // - класс 'page-header--js-enabled' элементу page-header
  // - класс 'main-nav__list--js-enabled' элементу main-nav
  // - класс 'page-header__wrapper--js-enabled' элементу page-header-wrapper
  // - класс 'main-nav__toggle--js-enabled' элементу nav-btn (показать гамбургер)
  //
  const listItems = document.getElementsByClassName("site-list__item");
  for (const listItem of listItems) {
    listItem.classList.add('site-list__item--js-enabled');
  }
  document.getElementById("page-header").classList.add('page-header--js-enabled');
  document.getElementById("main-nav").classList.add('main-nav__list--js-enabled');
  document.getElementById("page-header-wrapper").classList.add('page-header__wrapper--js-enabled');
  document.getElementById("nav-btn").classList.add('main-nav__toggle--js-enabled');

  //
  // Спрятать открытое меню
  //
  document.getElementById("main-nav").classList.remove('main-nav__list--open');


  var isOpen = false;
  var button = document.getElementById('nav-btn');
  var headerWrapBlock = document.getElementById('page-header-wrapper');
  var navBlock = document.getElementById('main-nav');

  button.addEventListener('click', function (e) {
    isOpen = !isOpen;
    if (isOpen) {
      headerWrapBlock.classList.add('page-header__wrapper--bg');
      navBlock.classList.add('main-nav__list--open');
      button.classList.add('main-nav__toggle--close');
    } else {
      headerWrapBlock.classList.remove('page-header__wrapper--bg');
      navBlock.classList.remove('main-nav__list--open');
      button.classList.remove('main-nav__toggle--close');
    }
  }, false);

  var formButton = document.getElementById('form-butto');
  var lastName = document.getElementById('last-name');
  var name = document.getElementById('name');
  var email = document.getElementById('email');

  formButton.addEventListener('click', function (e) {
    alert('Работает');
  });

  function updateButtonAccess() {
    if (!!lastName.value && !!name.value && !!email.value) {
      formButton.disabled = false;
      formButton.classList.remove('form__button--disabled');
    } else {
      formButton.disabled = true;
      formButton.classList.add('form__button--disabled');
    }
  }
  updateButtonAccess();

  lastName.oninput = function () {
    updateButtonAccess();
  }
  name.oninput = function () {
    updateButtonAccess();
  }
  email.oninput = function () {
    updateButtonAccess();
  }

});
