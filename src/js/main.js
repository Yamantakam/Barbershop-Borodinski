"use strict";



var nav = document.querySelector(".nav"),
    navToggle = nav.querySelector(".nav__toggle");
nav.classList.remove("nav--nojs");
navToggle.addEventListener("click", function(){
  if(nav.classList.contains("nav--closed")){
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
  }
});



var popUp = document.querySelector(".popup"),
    btnOpen = document.querySelector(".nav__user-link"),
    btnClose = document.querySelector(".login-form__btn--close"),
    form = popUp.querySelector(".popup__form"),
    login = form.querySelector(".popup__login"),
    password = form.querySelector(".popup__password"),
    storage = localStorage.getItem("login");
btnOpen.addEventListener("click", function(event){
  event.preventDefault();
  popUp.classList.toggle("popup--opened");
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
  if(storage){
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
btnClose.addEventListener("click", function(){
  if(popUp.classList.contains("popup--opened")){
    popUp.classList.remove("popup--opened");
  }
});
window.addEventListener("keydown", function(event){
  if(event.keyCode == 27){
    if(popUp.classList.contains("popup--opened")){
      popUp.classList.remove("popup--opened");
    }
  }
});
form.addEventListener("submit", function(event){
  if(!login.value || !password.value){
    event.preventDefault();
  } else {
    localStorage.setItem("login", login.value);
  }
});
