$(function () {

    particlesJS("particles-oli-wrapper", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fc794f"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                // "image": {
                //     "src": "img/github.svg",
                //     "width": 100,
                //     "height": 100
                // }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 20,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#fc794f",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },

            }
        },
        "retina_detect": true
    });

    var $particle = $('#particles-oli-wrapper').css({ display: 'none'}).removeClass('hide');
    var $navH1 = $('.index-wrapper header h1, .index-wrapper header nav').hide();
    var $profile = $(".profile").attr("src","img/profile.png");
    var $linkedin = $(".linkedin").attr("src","img/linkedin.png");
    var $email = $(".email").attr("src","img/email.png");
    var $phone = $(".phone").attr("src","img/phone.png");
    var $instagram = $(".instagram").attr("src","img/instagram.png");

    var $header = $('.index-wrapper .hide')
                    .removeClass('hide')
                    .css({
                        height: 0
                    })
                    .animate({
                        height: 300
                    }, 800, function() {
                        $particle.fadeIn(600);
                        $navH1.fadeIn(600);
                        $profile.fadeIn(600);
                        $linkedin.fadeIn(600);
                        $email.fadeIn(600);
                        $phone.fadeIn(600);
                        $instagram.fadeIn(600);
                    });

    $('.head-nav__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        $particle.fadeOut(600);
        $navH1.fadeOut(100);
        $profile.fadeOut(100);
        $linkedin.fadeOut(100);
        $email.fadeOut(100);
        $instagram.fadeOut(100);
        $phone.fadeOut(100);

        $header.animate({
            height: 0
        }, 800, function() {
            window.location.href = $this.attr('href');
        });
    });

});
