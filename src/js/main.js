const className = document.querySelectorAll('.js-hover');
const servicesItems = document.querySelectorAll('.service__item__col:nth-child(n+7)');
const viewMoreBtn = document.querySelector('.view-more');
const viewMoreBtnG = document.querySelector('.view-more-g');
const servicesItemsGeneral = document.querySelectorAll('.service__item-clients-col:nth-child(n+4)');

for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('mouseenter', (e) => {
        e.target.innerHTML = 'Оставить заявку';
    }, false);
}

for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('mouseleave', (e) => {
        e.target.innerHTML = 'Узнать подробнее';
    }, false);
}

viewMoreBtn.addEventListener('click', hideCols);
viewMoreBtnG.addEventListener('click', hideColsG);

function hideCols(e) {
    e.preventDefault();
    for (let item of servicesItems) {
        if (item.style.display = 'none') {
            item.style.display = 'block';
            viewMoreBtn.style.display = 'none';
        }
    }
}

function hideColsG(e) {
    e.preventDefault();
    for (let item of servicesItemsGeneral) {
        if (item.style.display = 'none') {
            item.style.display = 'block';
            viewMoreBtnG.style.display = 'none';
        }
    }
}

// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function() { $(".scroll").click(function() { $("html,body").animate({ scrollTop: $("#header").offset().top }, "3000"); return false }) })
$(function() { $(".slideInDown").click(function() { $("html,body").animate({ scrollTop: $("#features").offset().top }, "3000"); return false }) })