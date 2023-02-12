// window.addEventListener('load', () => {
//     var url = '/index.html';
//     window.open(url, '_self');
// });




const signUpButton = document.querySelector('#signUpButton');
const signInButton = document.querySelector('#signInButton');
const Home = document.querySelector('#Home');

signUpButton.addEventListener('click', () => {
    console.log("SIGN UP");
    Home.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    console.log("SIGN OUT");
    Home.classList.remove("right-panel-active");
});