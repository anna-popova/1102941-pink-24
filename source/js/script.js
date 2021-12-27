document.addEventListener("DOMContentLoaded", function (event) {

  var isOpen = false;
  var button = document.getElementById("nav-btn");
  var headerBlock = document.getElementById("page-header");
  var navBlock = document.getElementById("main-nav");

  button.addEventListener("click", function (e) {
    isOpen = !isOpen;
    if (isOpen) {
      headerBlock.classList.add("page-header__wrapper--bg");
      navBlock.classList.add("main-nav__list--open");
      button.classList.add("main-nav__toggle--close");
    } else {
      headerBlock.classList.remove("page-header__wrapper--bg");
      navBlock.classList.remove("main-nav__list--open");
      button.classList.remove("main-nav__toggle--close");
    }
  }, false);

  var formButton = document.getElementById("form-button");
  var lastName = document.getElementById("last-name");
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  formButton.addEventListener("click", function (e) {
    alert("Работает");
  }
  )

  function updateButtonAccess() {
    if (!!lastName.value && !!name.value && !!email.value) {
      formButton.disabled = false;
      formButton.classList.remove("form__button--disabled");
    } else {
      formButton.disabled = true;
      formButton.classList.add("form__button--disabled");
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
