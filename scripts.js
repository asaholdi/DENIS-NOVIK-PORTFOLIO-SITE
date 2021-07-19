/*
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if(window.pageYOffset > 100) {
        header.classList.add('header_fixed');
    }
    else{
        header.classList.remove('header_fixed');
    }
}
*/

/* HEADER CODE */

var header = $('.header_content_js'),
    cloneHeader = header.clone()

cloneHeader.addClass('header--fixed')
header.before(cloneHeader);

$(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 100) {
        cloneHeader.addClass('header-show');
    } else {
        cloneHeader.removeClass('header-show');
    }
});

/* BURGER CODE */

const menuBurger = document.querySelector('.header_burger');
if (menuBurger) {
    const menuBody = document.querySelector('.navbar');
    menuBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        menuBody.classList.toggle('active');
    });

    const anchors = document.getElementsByClassName('nav_link');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function navbar() {
            menuBurger.classList.toggle('active');
            menuBody.classList.toggle('active');
        }
    }

}


/* BTN SCROLLTOP CODE */
const scrollBtn = document.querySelector('.showBtn');
window.onscroll = () => {
    if (window.scrollY > 300) {
        document.querySelector('.showBtn').classList.remove('showBtn_hide');
    } else if (window.scrollY < 300) {
        scrollBtn.classList.add('showBtn_hide');
    };
}

// NAVBAR CODE

/*
 */