$("#firstCarousel").owlCarousel({
    dir: rtl,
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1400: {
            items: 6
        }
    }
});


$("#secondCarousel").owlCarousel({
    dir: rtl,
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1400: {
            items: 3
        }
    }
});

$("#thirdCarousel").owlCarousel({
    dir: rtl,
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1400: {
            items: 3
        }
    }
});

$(".specialistCarousel").owlCarousel({
    dir: rtl,
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
});

$("#specialityFilterBtn").owlCarousel({
    dir: rtl,
    rtl: true,
    loop: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 3,
    animateOut: 'fadeOut',
    autoWidth: true,


});

/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity())
                {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();
*/
