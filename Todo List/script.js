// window.addEventListener('load', () => {
//     $("#Home").show();
//     $("#TodoList").hide();
// })

const TodoPage = document.querySelector("#TodoList")
const username = document.querySelector("#myname");
const usermail = document.querySelector("#mymail");
const login = document.querySelector("#enter");
const Name = document.querySelector("#Name");
const Mail = document.querySelector("#Mail");
const date = document.querySelector("#Date");
const Title = document.querySelector("#title");
const tasks = document.querySelector("#contents");
const AddItem = document.querySelector("#add-item-btn");
var Taskcard = document.querySelector("#tasksCard");
const container = document.querySelector("#tasks-container");
const overlay = document.querySelector(".change");
// const NewTask = document.getElementById("addtask").setAttribute("onclick", "javascript:alert('hello');");
const addNewTask = document.querySelector("#addtask");
// const remove = document.getElementById("del-btn").setAttribute("onclick", "javascript:alert('helloooooo');");
// const RemoveTask = document.getElementById("remove").setAttribute("onclick", "javascript:alert('helloooooo');");
const Remove = document.querySelector("#remove");

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Daydate = new Date().toLocaleDateString();
const nameRegex = /^[a-zA-Z '-]+$/;
console.log(Daydate);


login.addEventListener('click', () => {
    if (username.value.length > 0 && usermail.value.length > 0) {
        if (!username.value.match(nameRegex) && usermail.value.match(mailformat)) {
            console.log("WELCOME");
            $("#Home").hide();
            $("#TodoList").show();
            Name.innerHTML = `Hi, ${username.value}`;
            Mail.innerHTML = usermail.value;
            date.innerText = Daydate;
            // $(".card").show();
        } else {
            alert("Invalid Username or Password");
        }
    } else {
        alert("Fields cannot be empty");
    }

})


$(".card").hide();


AddItem.addEventListener('click', () => {
    if (Title.value.length > 0 && tasks.value.length > 0) {
        const Taskcard = document.createElement('div');
        // const card = document.createElement('div');
        Taskcard.classList.add('Taskcard');
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
        $(".Taskcard").show();

        // const taskData = {
        //     title: Title.value,
        //     content: tasks.value
        // };

        // let tasksArray = [];
        // if (localStorage.getItem(`tasksArray_${usermail.value}`)) {
        //     tasksArray = JSON.parse(localStorage.getItem(`tasksArray_${usermail.value}`));
        // }
        // tasksArray.push(taskData);
        // localStorage.setItem(`tasksArray_${usermail.value}`, JSON.stringify(tasksArray));

        Title.value = '';
        tasks.value = '';

    }
});



// const storedTasks = JSON.parse(localStorage.getItem(`tasksArray_${usermail.value}`)) || [];
// storedTasks.forEach((task) => {
//     const Taskcard = document.createElement('div');
//     Taskcard.classList.add('Taskcard');

//     const getTitle = document.createElement("h4");
//     getTitle.innerHTML = task.title;
//     Taskcard.appendChild(getTitle);

//     const taskHTML = `<div class="task">
//       <input type="checkbox">
//       <span>${task.content}</span>
//     </div>`;

//     Taskcard.innerHTML += taskHTML;
//     container.appendChild(Taskcard);
// });




// console.log(addNewTask);
// console.log(delit);
console.log(AddItem);

addNewTask.addEventListener('click', () => {
    console.log("YEEEEHHHHHHH");
    alert("YEEEEHHHHHHH");
})

Remove.addEventListener('click', () => {
    console.log("PRESSINg");
    alert("PRESSINg");
})


function PlusTask() {
    console.log("YEEEEHHHHHHH");
    alert("YEEEEHHHHHHH");
}

function DeleteTask() {
    alert("PRESSINg");
    console.log("PRESSINg");
}

console.log("REACH")

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