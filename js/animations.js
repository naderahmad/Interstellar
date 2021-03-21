var infoMovie = document.querySelector('.infoMovie'),
    titleMovie = document.querySelector('.titleMovie'),
    navigation = document.querySelector('.navigation'),
    buttons = document.querySelector('.buttons'),
    search = document.querySelector('.search'),
    logo = document.querySelector('.logo'),
    fadein = document.querySelector(' .banner .filterfade'),
    trailer = document.querySelector('.trailer'),
    video = document.getElementById('trailerVideo'),
    transition = document.querySelector('.transition'),
    footer = document.querySelector('.footer');

    function animation() {
        infoMovie.classList.add('slide-top');
        titleMovie.classList.add("text-blur-out", "slide-bottom");
        navigation.classList.add('fade-out');
        buttons.classList.add('fade-out');
        footer.classList.add('fade-out');
        search.classList.add('fade-out');
        logo.classList.add('fade-out');
        trailer.classList.add('active');
        trailer.classList.add('transition');

        setTimeout(function(){
            document.getElementById("trailerVideo").play();
        }, 3000);
        
    };

    function animationOut() {
        video.pause();
        video.currentTime = 0;
        infoMovie.classList.remove('slide-top');
        titleMovie.classList.remove("text-blur-out", "slide-bottom");
        navigation.classList.remove('fade-out');
        buttons.classList.remove('fade-out');
        footer.classList.remove('fade-out');
        search.classList.remove('fade-out');
        logo.classList.remove('fade-out');
        trailer.classList.remove('active');
        trailer.classList.remove('transition');

        titleMovie.classList.add("puff-in-center");
        navigation.classList.add('fade-in');
        buttons.classList.add('fade-in');
        footer.classList.add('fade-in');
        search.classList.add('fade-in');
        logo.classList.add('fade-in');
        infoMovie.classList.add('slide-bottom');

        setTimeout(function(){
            titleMovie.classList.remove("puff-in-center");
            navigation.classList.remove('fade-in');
            buttons.classList.remove('fade-in');
            footer.classList.remove('fade-in');
            search.classList.remove('fade-in');
            logo.classList.remove('fade-in');
            infoMovie.classList.remove('slide-bottom');
        }, 1000);

    };
