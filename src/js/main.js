const className = document.querySelectorAll('.js-hover');
const servicesItems = document.querySelectorAll('.service__item__col:nth-child(n+7)');
const viewMoreBtn = document.querySelector('.view-more');
const viewMoreBtnG = document.querySelector('.view-more-g');
const servicesItemsGeneral = document.querySelectorAll('.service__item-clients-col:nth-child(n+4)');
const modalHeadText = document.querySelector('#head-text');
const hiddenInput = document.querySelector('#hidden-input');

// Change text on mouseenter
for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('mouseenter', (e) => {
        e.target.innerHTML = 'Оставить заявку';
        e.preventDefault();
    }, false);
    className[i].addEventListener('click', (e) => {
        e.preventDefault();
    }, false);
}

// Change text on mouseleave
for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('mouseleave', (e) => {
        e.target.innerHTML = 'Узнать подробнее';
        e.preventDefault();
    }, false);
    className[i].addEventListener('click', (e) => {
        e.preventDefault();
    }, false);
}

// Add text on modal
for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('click', (e) => {
        e.preventDefault();
        let titleText = e.target.getAttribute('data-title');
        modalHeadText.innerText = titleText;
        hiddenInput.value = titleText;
    }, false);
}

viewMoreBtn.addEventListener('click', hideCols);
viewMoreBtnG.addEventListener('click', hideColsG);

// Show more block
function hideCols(e) {
    e.preventDefault();
    for (let item of servicesItems) {
        if (item.style.display = 'none') {
            item.style.display = 'block';
            viewMoreBtn.style.display = 'none';
        }
    }
}
// Show more block
function hideColsG(e) {
    e.preventDefault();
    for (let item of servicesItemsGeneral) {
        if (item.style.display = 'none') {
            item.style.display = 'block';
            viewMoreBtnG.style.display = 'none';
        }
    }
}

// JQUERY

$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".smooth").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

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