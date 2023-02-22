const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close'),
    navLink = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};


//REMOVE MOBILE MENU
const linkAction = () => {
    navMenu.classList.remove('show-menu')
};
navLink.forEach(n => n.addEventListener('click', linkAction));


//DARK THEME/MODE
let themeButton = document.querySelector('#theme-button');

themeButton.onclick = () => {
    if (themeButton.classList.contains('ri-moon-line')) {
        themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
        document.body.classList.add('active');
    } else {
        themeButton.classList.replace('ri-sun-line', 'ri-moon-line');
        document.body.classList.remove('active');
    }
}

//EMAIL JS
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Fill all the input fields 📩'
    } else {
        emialjs.sendForm('', '', '', '')
    }
}

contactForm.addEventListener('submit', sendEmail)