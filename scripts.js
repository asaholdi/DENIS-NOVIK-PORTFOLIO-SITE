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

var header = $('.header-js'),
cloneHeader = header.clone()

cloneHeader.addClass('header--fixed')
header.before(cloneHeader);

$(window).scroll(function(){
    console.log($(window).scrollTop());

    if ( $(window).scrollTop() > 100 ){
        cloneHeader.addClass('header-show');
    }
    else{
        cloneHeader.removeClass('header-show');
    }
});

