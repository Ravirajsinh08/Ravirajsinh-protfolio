(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


   // Navbar on scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
        $('.navbar').fadeOut('slow').css('display', 'none');
    }

    // Check for active section based on scroll position
    var scrollPosition = $(this).scrollTop() + 45; // Add 45 for the height of the navbar
    $('.navbar-nav a').each(function () {
        var target = $(this.hash);
        if (target.length) {
            if (target.position().top <= scrollPosition && target.position().top + target.outerHeight() > scrollPosition) {
                $('.navbar-nav .active').removeClass('active');
                $(this).addClass('active');
            }
        }
    });
});

// Smooth scrolling on the navbar links
$(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 45
        }, 1500, 'easeInOutExpo');
        
        $('.navbar-nav .active').removeClass('active');
        $(this).addClass('active');
    }
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

//   <!-- Send Mail message -->

    function sendMessage() {
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Construct the email body
        var emailBody = "Name: " + name + "\n";
        emailBody += "Email: " + email + "\n";
        emailBody += "Subject: " + subject + "\n";
        emailBody += "Message: " + message;

        // Log the email body (for demonstration)
        console.log(emailBody);

        var mailtoLink = "mailto:reavirajsinh6504@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
       window.location.href = mailtoLink;
        
        // For demonstration, let's just alert the user
        // alert("Your message has been sent!");
        
        // Clear form fields after submission
        document.getElementById('contactForm').reset();
    }

    //  <!-- Cv download Javascript -->
    //  function downloadCV() {
         // Replace 'path/to/your/cv.pdf' with the actual path to your CV PDF file
        //  var cvUrl = '/pdf/Ravirajsinh(RESUME).pdf';
         
         // Create a temporary anchor element
        //  var link = document.createElement('a');
        //  link.href = cvUrl;
        //  link.download = 'Ravirajsinh(Cv)'; // Set the file name for the download
        //  document.body.appendChild(link);
         
         // Trigger the download
        //  link.click();
         
        //  // Clean up
        //  document.body.removeChild(link);
    //  }