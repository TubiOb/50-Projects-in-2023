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
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
});



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
    img: "",
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    img: "",
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    img: "",
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    img: "",
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    img: "",
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}]