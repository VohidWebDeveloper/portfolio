"use strict";

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    // header.classList.toggle('sticky' , window.scrollY > 0)
    if (window.scrollY > 0) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  });
  var navbar = document.querySelector('.navbar');
  var menuBtn = document.querySelector('.menu-btn');
  var header = document.querySelector('header');
  var navItem = document.querySelectorAll('.navbar a'); // const modal = document.querySelector('.modal');

  var modale = document.querySelector('.modale');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('close');
    navbar.classList.toggle('active');
  });
  navItem.forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      menuBtn.classList.remove('close');
      navbar.classList.remove('active');
    });
  }); // seeMore.addEventListener('click' , function() {
  //     modal.classList.toggle('modale')
  // })
  // Get the modal

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var seeMore = document.querySelector('.see-more');
  $(window).click(function () {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  $(seeMore).click(function () {
    modal.style.display = "block";
  });
  $(span).click(function () {
    modal.style.display = "none";
  });
});