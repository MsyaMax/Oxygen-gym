$(document).ready(function() {
    $('.navbar-button').click(function() {
        $('.navbar-button').toggleClass('change')
    })
})
$(window).scroll(function() {
    let position = Number($(this).scrollTop());
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }
})
$(window).scroll(function() {
    let position = Number($(this).scrollTop());
    if (position >= 800) {
        $('.award-text').addClass('fromRight');
        $('.award-img').addClass('fromLeft');
    } else {
        $('.award-text').removeClass('fromRight');
        $('.award-img').removeClass('fromLeft');
    }
})
$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item');
    $(this).siblings().removeClass('active-item')

    if (value === "all") {
        $('.all').show(300);

    } else {
        $('.all').filter('.' + value).show(300)
        $('.all').not('.' + value).hide(300)

    }
})

$(window).scroll(function() {
    let position = Number($(this).scrollTop());
    if (position >= 4400) {
        $('.card1').addClass('card1MoveFromRight');
        $('.card2').addClass(' card2MoveFromLeft');
        $('.card3').addClass('card3MoveFromBottom');
    } else {
        $('.card1').removeClass('card1MoveFromRight');
        $('.card2').removeClass('card2MoveFromLeft');
        $('.card3').removeClass('card3MoveFromBottom');
    }
})