// window.addEventListener('load', () => {
//     $("#Home").show();
//     $("#TodoList").hide();
// })

const username = document.querySelector("#myname");
const usermail = document.querySelector("#mymail");
const login = document.querySelector("#enter");
const Name = document.querySelector("#Name");
const Mail = document.querySelector("#Mail");
const date = document.querySelector("#Date");
const Title = document.querySelector("#title");
const tasks = document.querySelector("#contents");
const addItem = document.querySelector(".add-item-btn");
var Taskcard = document.querySelector("#tasksCard");
const container = document.querySelector("#tasks-container");

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Daydate = new Date().toLocaleDateString();
const nameRegex = /^[a-zA-Z '-]+$/;
console.log(Daydate);


login.addEventListener('click', () => {
    if (username.value.length > 0 && usermail.value.length > 0) {
        if (username.value.match(nameRegex) && usermail.value.match(mailformat)) {
            console.log("WELCOME");
            $("#Home").hide();
            $("#TodoList").show();
            Name.innerHTML = `Hi, ${username.value}`;
            Mail.innerHTML = usermail.value;
            date.innerText = Daydate;
        } else {
            alert("Invalid Username or Password");
        }
    } else {
        alert("Fields cannot be empty");
    }
})



addItem.addEventListener('click', () => {
    if (Title.value.length > 0 && tasks.value.length > 0) {
        const Taskcard = document.createElement('div');
        // const card = document.createElement('div');
        Taskcard.classList.add('card');
        Taskcard.id = "tasksCard";

        const getTitle = document.createElement("h4");
        getTitle.innerHTML = Title.value;
        Taskcard.appendChild(getTitle);

        const taskHTML = `<div class="task">
      <input type="checkbox">
      <span>${tasks.value}</span>
    </div>`;

        Taskcard.innerHTML += taskHTML;

        // container.appendChild(card);

        container.appendChild(Taskcard);

        Title.value = '';
        tasks.value = '';
        $(".card").show();
    }
});



// const task = [];
// while (true) {
//     if (!tasks.value)
//         break;
//     task.push(tasks);
// }

// if (task.length > 0) {
//     const card = document.createElement("div");
//     container.classList.add("ccntainer");

//     

//     let tasksHTML = "";
//     task.forEach(tasks => {
//         tasksHTML += `<div class="task">
//         <input type="checkbox">
//         <span>${tasks.value}</span>
//       </div>`;
//     });
//     card.innerHTML += tasksHTML;
//     Taskcard.appendChild(card);
// }