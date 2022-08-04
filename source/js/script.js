var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.page-header__toggle');
    var navHeader = document.querySelector('.page-header');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
      } else {
        navMain.classList.add('main-nav--closed');
      }
      if (navToggle.classList.contains('page-header__toggle--closed')) {
        navToggle.classList.remove('page-header__toggle--closed');
        navToggle.classList.add('page-header__toggle--opened');
      } else {
        navToggle.classList.add('page-header__toggle--closed');
        navToggle.classList.remove('page-header__toggle--opened');
      }
      if (navHeader.classList.contains('page-header--closed')) {
        navHeader.classList.remove('page-header--closed');
      } else {
        navHeader.classList.add('page-header--closed');
      }
    });
