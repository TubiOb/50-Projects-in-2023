const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    console.log("WOW")
    navbarToggle.classList.toggle('active');
    navbarMenu.style.display = "block"
    navbarMenu.classList.toggle('active');
});


// navbarToggle.addEventListener('mouseenter', () => {
//     console.log("SHITE")
//     navbarToggle.classList.toggle('active');
//     navbarMenu.classList.toggle('active');
// });


navbarToggle.addEventListener('mouseleave', () => {
    console.log("skrep")
    navbarToggle.classList.toggle('active');
    navbarMenu.style.display = "none"
    navbarMenu.classList.toggle('active');
})



// ACTIVE SCROLL SECTION
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.querySelector('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader);




const swiperContainer = document.querySelector('.swiper-wrapper');
const MovieswiperContainer = document.querySelector('.movie');
const NewswiperContainer = document.querySelector('.newWrap');
// GENERATING CONTENTS OF THE CARD
const series = [{
    img: "./img/american dad.jpg",
    title: "American Dad",
    ageRange: "14+",
    seasons: "17",
    type: "Adult animated sitcom",
}, {
    img: "./img/The Simpsons.jpg",
    title: "The Simpsons",
    ageRange: "PG",
    seasons: "34",
    type: "Animated Sitcom",
}, {
    img: "./img/Regular Show card.jpg",
    title: "Regular Show",
    ageRange: "11+",
    seasons: "8",
    type: "Action, Adventure, Comdey, Fantasy, Sci-fi",
}, {
    img: "./img/we bare bears.png",
    title: "We Bare Bears",
    ageRange: "8+",
    seasons: "4",
    type: "Comedy Animation",
}, {
    img: "./img/Family Guy.jpg",
    title: "Family Guy",
    ageRange: "TV-14",
    seasons: "21",
    type: "Animated Sitcom",
}, {
    img: "./img/Scobby Doo - series.jpg",
    title: "Scooby Doo",
    ageRange: "6+",
    seasons: "4",
    type: "Animated Sitcom",
}, {
    img: "./img/phineas and ferb.jpg",
    title: "Phineas and Ferb",
    ageRange: "5+",
    seasons: "4",
    type: "Animation, Action, Surreal Comedy",
}, {
    img: "./img/Rick and Morty.jpg",
    title: "Rick and Morty",
    ageRange: "16+",
    seasons: "6",
    type: "Animated Sitcom",
}, {
    img: "./img/The Flintstones.jpg",
    title: "The Flintsones",
    ageRange: "5+",
    seasons: "11",
    type: "Animated Sitcom",
}, {
    img: "./img/The Proud Family Minimal Movie Poster.jpg",
    title: "The Proud Family",
    ageRange: "7+",
    seasons: "3",
    type: "Animated Sitcom",
}, {
    img: "./img/adventure time.jpg",
    title: "Adventure Time",
    ageRange: "10+",
    seasons: "10",
    type: "	Science fantasy, Adventure, Surreal comedy, Coming of age",
}, {
    img: "./img/Teen Titans Poster by Cindy.jpg",
    title: "Teen Titans",
    ageRange: "7+",
    seasons: "4",
    type: "Action Adventure Superhero",
}, ];


const movies = [{
        img: "./img/Phineas and Ferb The Movie_ Candace Against the Universe by Jessi.jpg",
        title: "Candace Against The Universe",
        ageRange: "5+",
        duration: "1hr 25m",
        type: "Animated adventure",
    }, {
        img: "./img/monster high_ electrified.jpg",
        title: "Monster High: Electrified",
        ageRange: "7+",
        duration: "1hr 15m",
        type: "Animation, Action, Comedy",
    }, {
        img: "./img/Puss in Boots.jpg",
        title: "Puss in Boots",
        ageRange: "6+",
        duration: "1hr 30m",
        type: "Family-Oriented Adventure & Comedy",
    }, {
        img: "./img/raya and the last dragon.jpg",
        title: "Raya and the Last Dragon",
        ageRange: "PG",
        duration: "1hr 47m",
        type: "Animation Action Adventure",
    }, {
        img: "./img/luca.png",
        title: "Luca",
        ageRange: "6+",
        duration: "1hr 35m",
        type: "Coming-of-age fantasy",
    }, {
        img: "./img/Encanto poster.jpg",
        title: "Encanto",
        ageRange: "6+",
        duration: "1hr 39m",
        type: "Adventure, Animation, Fantasy, Kids & Family, Musical",
    },
    {
        img: "./img/Vivo.jpg",
        title: "Vivo",
        ageRange: "6+",
        duration: "1hr 33m",
        type: "Kids & family, Musical, Comedy",
    },
    {
        img: "./img/Ron's Gone Wrong.jpg",
        title: "Ron's Gone Wrong",
        ageRange: "PG",
        duration: "1hr 47m",
        type: "Science fiction",
    },
    {
        img: "./img/the mitchell’s vs the machines movie poster.jpg",
        title: "The Mitchells vs. The Machines",
        ageRange: "8+",
        duration: "1hr 54m",
        type: "Science fiction",
    },
    {
        img: "./img/Soul.jpg",
        title: "Soul",
        ageRange: "9+",
        duration: "1hr 40m",
        type: "Family, Drama, Music, Comedy, Animation, Fantasy",
    },
    {
        img: "./img/Onward.jpg",
        title: "Onward",
        ageRange: "7+",
        duration: "1hr 40m",
        type: "Animation, Fantasy, Comedy, Adventure",
    },
];


const new_n_Pop = [{
    img: "./img/Raulcharic.jpg",
    title: "Wendell and Wild",
    ageRange: "PG-13",
    duration: "1hr 45m",
    type: "Animated horror comedy",
}, {
    img: "./img/Marcel the Shell with Shoes On Alternative Minimalist Movie_Show Polaroid Poster.jpg",
    title: "Marcel the shell with shoes on",
    ageRange: "8+",
    duration: "1hr 30m",
    type: "Animation, Comedy, Drama, Family, Fantasy",
}, {
    img: "./img/Turning Red Alternative Minimalist Movie Polaroid Poster.jpg",
    title: "Turning Red",
    ageRange: "10+",
    duration: "1hr 40m",
    type: "Fantasy comedy",
}, {
    img: "./img/Puss in Boots_The Last Wish.jpg",
    title: "Puss in Boots: The Last Wish",
    ageRange: "PG",
    duration: "1hr 42m",
    type: "Animation, Adventure, Comedy",
}, {
    img: "./img/PINOCCHIO by Guillermo del toro.jpg",
    title: "Pinocchio",
    ageRange: "8+",
    duration: "1hr 54m",
    type: "Musical, Fantasy, Animation",
}, {
    img: "./img/FilmChop's Pick of the Week_ Apollo 10 1_2.jpg",
    title: "Apollo 10 1/2",
    ageRange: "13+",
    duration: "1hr 38m",
    type: "Animation, Adventure, Drama, Family, History",
}, {
    img: "./img/The Sea Beast.jpg",
    title: "The Sea Beast",
    ageRange: "PG",
    duration: "1hr 55m",
    type: "Animation, Adventure, Comedy, Family, Fantasy",
}, {
    img: "./img/Breaking Beavis and Butthead.jpg",
    title: "BEAVIS AND BUTT-HEAD DO THE UNIVERSE",
    ageRange: "TV-14",
    duration: "1hr 26m",
    type: "Comedy, Sci-Fi",
}, {
    img: "./img/Mummies movie.jpg",
    title: "Mummies",
    ageRange: "PG",
    duration: "1hr 28m",
    type: "Kids & family/Drama",
}, {
    img: "./img/The Amazing Maurice Movie.jpg",
    title: "The Amazing Maurice",
    ageRange: "PG",
    duration: "1hr 3m",
    type: "Kids & family Comedy",
}, {
    img: "./img/Luck 2022.jpg",
    title: "Luck",
    ageRange: "4+",
    duration: "1hr 37m",
    type: "Animation, Adventure, Comedy, Family, Fantasy",
}, ];

const Cardcontainer = document.querySelector('.swiper');
const Card = document.querySelector(".serieCard");
const Poster = document.querySelector(".poster");
const MovieName = document.querySelector(".title");
const ageLimit = document.querySelector('.age');
const Seasons = document.querySelector('.seasons');
const Time = document.querySelector('.time');
const Genre = document.querySelector('.type');

Card.style.display = "none";

// let MovieCards;

series.forEach((item) => {
    const serieCard = document.createElement("div");
    serieCard.classList.add('Card');
    serieCard.id = "serieCard";
    const poster = document.createElement("img");
    const title = document.createElement("span");
    const buttons = document.createElement("div");
    const playButton = document.createElement("button");
    const playIcon = document.createElement("i");
    const checkButton = document.createElement("button");
    const checkIcon = document.createElement("i");
    const likeButton = document.createElement("button");
    const likeIcon = document.createElement("i");
    const serieDetails = document.createElement("div");
    const ageSeasons = document.createElement("div");
    const age = document.createElement("p");
    const seasons = document.createElement("p");
    const theGenre = document.createElement("div");
    const type = document.createElement("p");

    // Add classes and attributes to the elements
    serieCard.classList.add("serieCard", "swiper-slide");
    poster.classList.add("poster");
    poster.setAttribute("src", item.img);
    poster.setAttribute("alt", `${item.title} Poster`);
    title.classList.add("title");
    title.textContent = item.title;
    buttons.classList.add("buttons");
    playButton.innerHTML = '<i class="ri-play-line"></i>';
    checkButton.innerHTML = '<i class="ri-check-line"></i>';
    likeButton.innerHTML = '<i class="ri-thumb-up-line"></i>';
    serieDetails.classList.add("serieDetails");
    ageSeasons.classList.add("age_Seasons");
    age.classList.add("age");
    age.textContent = item.ageRange;
    seasons.classList.add("seasons");
    seasons.textContent = "Seasons: " + item.seasons;
    theGenre.classList.add("the_genre");
    type.classList.add("type");
    type.textContent = item.type;

    // Append the elements to the serieCard
    swiperContainer.appendChild(serieCard);
    serieCard.appendChild(poster);
    serieCard.appendChild(title);
    serieCard.appendChild(buttons);
    buttons.appendChild(playButton);
    buttons.appendChild(checkButton);
    buttons.appendChild(likeButton);
    serieCard.appendChild(serieDetails);
    serieDetails.appendChild(ageSeasons);
    ageSeasons.appendChild(age);
    ageSeasons.appendChild(seasons);
    serieDetails.appendChild(theGenre);
    theGenre.appendChild(type);

    console.log(serieCard);
    serieCard.style.display = "flex";
});


movies.forEach((item) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add('Card');
    movieCard.id = "movieCard";
    const poster = document.createElement("img");
    const title = document.createElement("span");
    const buttons = document.createElement("div");
    const playButton = document.createElement("button");
    const playIcon = document.createElement("i");
    const checkButton = document.createElement("button");
    const checkIcon = document.createElement("i");
    const likeButton = document.createElement("button");
    const likeIcon = document.createElement("i");
    const movieDetails = document.createElement("div");
    const ageDuration = document.createElement("div");
    const age = document.createElement("p");
    const duration = document.createElement("p");
    const theGenre = document.createElement("div");
    const type = document.createElement("p");

    // Add classes and attributes to the elements
    movieCard.classList.add("movieCard", "swiper-slide");
    poster.classList.add("poster");
    poster.setAttribute("src", item.img);
    poster.setAttribute("alt", `${item.title} Poster`);
    title.classList.add("title");
    title.textContent = item.title;
    buttons.classList.add("buttons");
    playButton.innerHTML = '<i class="ri-play-line"></i>';
    checkButton.innerHTML = '<i class="ri-check-line"></i>';
    likeButton.innerHTML = '<i class="ri-thumb-up-line"></i>';
    movieDetails.classList.add("movieDetails");
    ageDuration.classList.add("age_Duration");
    age.classList.add("age");
    age.textContent = item.ageRange;
    duration.classList.add("time");
    duration.textContent = item.duration;
    theGenre.classList.add("the_genre");
    type.classList.add("type");
    type.textContent = item.type;

    // Append the elements to the serieCard
    MovieswiperContainer.appendChild(movieCard);
    movieCard.appendChild(poster);
    movieCard.appendChild(title);
    movieCard.appendChild(buttons);
    buttons.appendChild(playButton);
    buttons.appendChild(checkButton);
    buttons.appendChild(likeButton);
    movieCard.appendChild(movieDetails);
    movieDetails.appendChild(ageDuration);
    ageDuration.appendChild(age);
    ageDuration.appendChild(duration);
    movieDetails.appendChild(theGenre);
    theGenre.appendChild(type);

    console.log(movieCard);
    movieCard.style.display = "flex";
});



new_n_Pop.forEach((item) => {
    const newCard = document.createElement("div");
    newCard.classList.add('Card');
    newCard.id = "newCard";
    const poster = document.createElement("img");
    const title = document.createElement("span");
    const buttons = document.createElement("div");
    const playButton = document.createElement("button");
    const playIcon = document.createElement("i");
    const checkButton = document.createElement("button");
    const checkIcon = document.createElement("i");
    const likeButton = document.createElement("button");
    const likeIcon = document.createElement("i");
    const newDetails = document.createElement("div");
    const ageDuration = document.createElement("div");
    const age = document.createElement("p");
    const duration = document.createElement("p");
    const theGenre = document.createElement("div");
    const type = document.createElement("p");

    // Add classes and attributes to the elements
    newCard.classList.add("newCard", "swiper-slide");
    poster.classList.add("poster");
    poster.setAttribute("src", item.img);
    poster.setAttribute("alt", `${item.title} Poster`);
    title.classList.add("title");
    title.textContent = item.title;
    buttons.classList.add("buttons");
    playButton.innerHTML = '<i class="ri-play-line"></i>';
    checkButton.innerHTML = '<i class="ri-check-line"></i>';
    likeButton.innerHTML = '<i class="ri-thumb-up-line"></i>';
    newDetails.classList.add("newDetails");
    ageDuration.classList.add("age_Duration");
    age.classList.add("age");
    age.textContent = item.ageRange;
    duration.classList.add("time");
    duration.textContent = item.duration;
    theGenre.classList.add("the_genre");
    type.classList.add("type");
    type.textContent = item.type;

    // Append the elements to the serieCard
    NewswiperContainer.appendChild(newCard);
    newCard.appendChild(poster);
    newCard.appendChild(title);
    newCard.appendChild(buttons);
    buttons.appendChild(playButton);
    buttons.appendChild(checkButton);
    buttons.appendChild(likeButton);
    newCard.appendChild(newDetails);
    newDetails.appendChild(ageDuration);
    ageDuration.appendChild(age);
    ageDuration.appendChild(duration);
    newDetails.appendChild(theGenre);
    theGenre.appendChild(type);

    console.log(newCard);
    newCard.style.display = "flex";
});


// CARD SWIPER
const mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    mousewheel: true,
    keyboard: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1.05,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 200px (for mobile screens)
        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 992px (for large screens)
        992: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 3.75,
            spaceBetween: 30
        }
    },
});