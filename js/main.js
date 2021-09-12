"use strict";

//	Переменные
const body = document.querySelector('body');
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const navigation = document.querySelector('.navigation');
const navigationItems = navigation.querySelector('ul').children;
const menu = document.querySelector('.header__button');
const menuOpen = document.querySelector('.header__open');
const menuClose = document.querySelector('.header__close'); //	Функция, которая удаляет необходимые классы, когда JS загрузился

const deleteNojsClass = () => {
  header.classList.remove('header--no-js');
  about.classList.remove('about--no-js');
  navigation.classList.remove('navigation--no-js');
}; //	Обработчик событий на окно


window.addEventListener('load', () => {
  deleteNojsClass();
}); //	Обработчик событий на кнопку меню

menu.addEventListener('click', () => {
  if (!navigation.classList.contains('navigation--menu-open')) {
    menuOpen.classList.add('hide');
    menuClose.classList.remove('hide');
    menu.style.height = '52px';
    menu.style.backgroundColor = 'white';
    header.classList.add('header--menu-open');
    body.style.overflow = 'hidden';
  } else {
    menuOpen.classList.remove('hide');
    menuClose.classList.add('hide');
    menu.style.height = '50px';
    menu.style.backgroundColor = '#0AD9C6';
    header.classList.remove('header--menu-open');
    body.style.overflow = 'scroll';
  }

  navigation.classList.toggle('navigation--menu-open');
});

for (const navigationItem of navigationItems) {
  navigationItem.addEventListener('click', () => {
    menuOpen.classList.remove('hide');
    menuClose.classList.add('hide');
    menu.style.height = '50px';
    menu.style.backgroundColor = '#0AD9C6';
    navigation.classList.remove('navigation--menu-open');
    body.style.overflow = 'scroll';
  });
}