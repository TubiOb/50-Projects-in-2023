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



// CARD SWIPER
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 6,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});


const swiperContainer = document.querySelector('.swiper-wrapper');
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
        type: "Family-Oriented Adventure , Family-Oriented Comedy",
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
    img: "./img/The Amazing Maurice Movie Still - #655014 - Movie Insider.jpg",
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
const Genre = document.querySelector('.type');

Card.style.display = "none";

// let MovieCards;

series.forEach((item) => {
    Poster.src = item.img;
    MovieName.innerHTML = item.title;
    ageLimit.innerHTML = item.ageRange;
    Seasons.innerHTML = item.seasons;
    Genre.innerHTML = item.type;


    // console.log(Poster.src);
    // console.log(MovieName.innerHTML);
    // console.log(ageLimit.innerHTML);
    // console.log(Seasons.innerHTML);
    // console.log(Genre.innerHTML);

    // Add the card to the parent element
    let MovieCards =
        `<div class="serieCard swiper-slide" id="serieCard">
            <img class="poster" id="poster" src="${Poster.src}" alt="">
            <span class="title" id="title">${MovieName.innerHTML}</span>
            <div class="buttons">
                <button>
                                                <i class="ri-play-line"></i>
                                            </button>
                <button>
                                                <i class="ri-check-line"></i>
                                            </button>
                <button>
                                                <i class="ri-thumb-up-line"></i>
                                            </button>
            </div>
            <div class="serieDetails" id="serieDetails">
                <div class="age_Seasons">
                    <p class="age" id="age">${ageLimit.innerHTML}</p>
                    <p class="seasons" id="seasons">${Seasons.innerHTML}</p>
                </div>
                <div class="the_genre">
                    <p class="type" id="type">${Genre.innerHTML}</p>
                    <h3></h3>
                </div>
            </div>
        </div>`;

    // console.log(Poster);
    // console.log(MovieName);
    // console.log(ageLimit);
    // console.log(Seasons);
    // console.log(Genre);

    console.log(Poster.src);
    console.log(MovieName.innerHTML);
    console.log(ageLimit.innerHTML);
    console.log(Seasons.innerHTML);
    console.log(Genre.innerHTML);

    Card.innerHTML += MovieCards;
    // console.log(Card);
    Cardwrapper.appendChild(Card);
    Cardcontainer.appendChild(Cardwrapper);

    Card.style.display = "flex";


});



// for (const obj of series) {
//     console.log(obj.img);
//     console.log(obj.title);
//     console.log(obj.ageRange);
//     console.log(obj.seasons);
//     console.log(obj.type);
//     console.log("");
//     console.log("");
// }

// Using forEach loop
// series.forEach((obj) => {
//     Poster.innerHTML = obj.img
//     console.log(Poster);
//     console.log(obj.title);
//     console.log(obj.ageRange);
//     console.log(obj.seasons);
//     console.log(obj.type);
//     console.log("");
// });

// Add the items to Card
// Card.appendChild(Poster);
// Card.appendChild(MovieName);
// Card.appendChild(ageLimit);
// Card.appendChild(Seasons);
// Card.appendChild(Genre);

// const newCard = Card.cloneNode(true); // Clone the card template
// const Card = document.createElement('div');
// Card.classList.add('Card');
// Card.id = "serieCard";

// Assign values to the elements in the card
// newCard.querySelector(".poster").src = item.img;
// newCard.querySelector(".title").textContent = item.title;
// newCard.querySelector(".age").textContent = item.ageRange;
// newCard.querySelector(".seasons").textContent = item.seasons;
// newCard.querySelector(".type").textContent = item.type;

// const Poster = document.createElement('img');
// Poster.id = "poster"

// const MovieName = document.createElement('span');
// MovieName.id = "title"

// const ageLimit = document.createElement('p');
// ageLimit.id = "age"

// const Seasons = document.createElement('p');
// Seasons.id = "seasons"

// const Genre = document.createElement('p');
// Genre.id = "type"