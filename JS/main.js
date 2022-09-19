window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {

        // header.classList.toggle('sticky' , window.scrollY > 0)

        if (window.scrollY > 0) {
            header.classList.remove("sticky");
        } else {
            header.classList.add("sticky");
        }
    })
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const header = document.querySelector('header');
    const navItem = document.querySelectorAll('.navbar a');
    // const modal = document.querySelector('.modal');
    const modale = document.querySelector('.modale');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('close');
        navbar.classList.toggle('active')

    })

    navItem.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('close')
            navbar.classList.remove('active')
        })
    })

    // seeMore.addEventListener('click' , function() {
    //     modal.classList.toggle('modale')
    // })

    // Get the modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const seeMore = document.querySelector('.see-more')

$(window).click(function(){
    if (event.target == modal) {
    modal.style.display = "none";
  }
})

$(seeMore).click(function() {
    modal.style.display = "block";
})

$(span).click(function() {
    modal.style.display = "none";
})

})

