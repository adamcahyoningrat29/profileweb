const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


 $('.owl-carousel').owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                margin: 20,
                loop: true,
                dots: false,
                nav : false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });