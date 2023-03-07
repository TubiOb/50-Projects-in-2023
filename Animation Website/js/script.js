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
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    seasons: "",
    type: "",
}, ];


const movies = [{
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, ];


const new_n_Pop = [{
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}, {
    title: "",
    ageRange: "",
    duration: "",
    type: "",
}]