const SignUp = document.querySelector("#sign");
const SignIn = document.querySelector("#enter");
const LoginUsername = document.querySelector("#myname");
const SignupUsername = document.querySelector("#username");
const FirstName = document.querySelector("#firstname");
const LastName = document.querySelector("#lastname");
const Email = document.querySelector("#mymail");
const SignUpPass = document.querySelector("#mypassword");
const SignInPass = document.querySelector("#mypassword1");

const signUpButton = document.querySelector('#signUpButton');
const signInButton = document.querySelector('#signInButton');
const Home = document.querySelector('#Home');

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const nameRegex = /^[a-zA-Z]+$/;
// const usernameRegex = /^[a-zA-Z][\w-]{2,19}$/;
const Passwrdformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// let UserData;


SignUp.addEventListener('click', () => {
    console.log("SHUTUPPPPPP")
    if (FirstName.value.length > 0 && LastName.value.length > 0 && Email.value.length > 0 && SignupUsername.value.length > 0) {
        if (SignUpPass.value.length >= 8) {
            if (FirstName.value.match(nameRegex) || LastName.value.match(nameRegex) || Email.value.match(mailformat) || SignupUsername.value.match(nameRegex) || SignUpPass.value.match(Passwrdformat)) {
                // UserData = {
                //     FirstName: FirstName.value,
                //     LastName: LastName.value,
                //     Username: SignupUsername.value,
                //     Mail: Email.value,
                //     Password: SignUpPass.value,
                // };
                // let details = [];
                // details.push(UserData);
                // localStorage.setItem(`details_${SignupUsername.value}`, JSON.stringify(details));
                alert("Hello, " + SignupUsername.value + "!");
                FirstName.value = "";
                LastName.value = "";
                SignupUsername.value = "";
                Email.value = "";
                SignUpPass.value = "";
                Home.classList.remove("right-panel-active");
                // console.log(details);
                // StoredDetails = details;
            } else {
                alert("Invalid Inputs");
            }
        } else {
            alert("Password must have at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character")
        }

    } else {
        alert("Fields cannot be empty");
    }
})




SignIn.addEventListener('click', () => {
    console.log("SCREEEEAAAAMMMMMM")
    if (LoginUsername.value.length > 0 && SignInPass.value.length > 0) {
        console.log(LoginUsername.value);
        console.log(SignInPass.value);
        if (LoginUsername.value.match(nameRegex) || SignInPass.value.match(Passwrdformat)) {
            alert("Welcome back, " + LoginUsername.value + "!");
            var url = './test.html';
            window.open(url, '_self');
            return;
        } else {
            alert("Invalid Username or Password");
            LoginUsername.value = "";
            SignInPass.value = "";
            Home.classList.add("right-panel-active");
        }
    } else {
        alert("Fields cannot be empty");
    }
});





signUpButton.addEventListener('click', () => {
    console.log("SIGN UP");
    Home.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    console.log("SIGN OUT");
    Home.classList.remove("right-panel-active");
});






// 

// if (StoredDetails) {
//     details = StoredDetails;
//     for (let i = 0; i < details.length; i++) {
//         console.log(details);
//         if (StoredDetails[i].Username === LoginUsername.value && StoredDetails[i].Password === SignInPass.value) {
//             console.log(StoredDetails[i].Username);
//             console.log(StoredDetails[i].Password);
//             alert("Welcome back, " + details[i].Username + "!");
//             window.addEventListener('load', () => {
//                 var url = '/test.html';
//                 window.open(url, '_self');
//             });
//             return;
//         }
//     }
//     alert("Incorrect username or password");
// } else {
//     alert("Please sign up first");
//     LoginUsername.value = "";
//     SignInPass.value = "";
//     Home.classList.add("right-panel-active");
// }