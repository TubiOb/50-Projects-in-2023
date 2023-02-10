window.addEventListener('load', () => {
    $("#Home").show();
    $("#TodoList").hide();
})

const TodoPage = document.querySelector("#TodoList")
const username = document.querySelector("#myname");
var usermail = document.querySelector("#mymail");
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
const addNewTask = document.querySelector("#addtask");
const Remove = document.querySelector("#remove");

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Daydate = new Date().toLocaleDateString();
const nameRegex = /^[a-zA-Z'-]+$/;
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
            // $(".card").show();
            $(".Taskcard").show();
        } else {
            alert("Invalid Username or Password");
        }
    } else {
        alert("Fields cannot be empty");
    }

})


$(".card").hide();

let selectedCard;

let tasksArray = JSON.parse(localStorage.getItem(`tasksArray_${usermail.value}`)) || [];

AddItem.addEventListener('click', () => {
    if (Title.value.length > 0 && tasks.value.length > 0) {
        const Taskcard = document.createElement('div');
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
        container.appendChild(Taskcard);
        $(".Taskcard").show();

        const taskData = {
            title: Title.value,
            tasks: tasks.value,
            mail: usermail.value
        };


        tasksArray.push(taskData);
        localStorage.setItem(`tasksArray_${usermail.value}`, JSON.stringify(tasksArray));

        Taskcard.addEventListener('click', (event) => {
            const taskCards = document.querySelectorAll('.Taskcard');
            taskCards.forEach(cards => {
                cards.style.backgroundColor = '';
                cards.style.filter = '';
            });
            event.currentTarget.style.backgroundColor = 'green';
            event.currentTarget.style.filter = 'blur(1px)';
            selectedCard = event.currentTarget;

            // setTimeout(() => {
            //     event.currentTarget.style.backgroundColor = '';
            //     event.currentTarget.style.filter = '';
            //     // selectedCard = null;
            // }, 5000);
        });
        Title.value = '';
        tasks.value = '';
    }
});


addNewTask.addEventListener('click', () => {
    console.log("YEEEEHHHHHHH");
    selectedCard = document.querySelector('.Taskcard[style="background-color: green; filter: blur(1px);"]');
    if (selectedCard && tasks.value.length > 0) {
        const taskHTML = `<div class="task">
            <input type="checkbox">
            <span>${tasks.value}</span>
        </div>`;
        selectedCard.innerHTML += taskHTML;

        Title.value = '';
        tasks.value = '';
    }
});

Remove.addEventListener('click', () => {
    console.log("PRESSINg");
    selectedCard = document.querySelector('.Taskcard[style="background-color: green; filter: blur(1px);"]');
    if (selectedCard) {
        selectedCard.remove();

        const index = Array.from(container.children).indexOf(selectedCard);
        tasksArray.splice(index, 1);
        localStorage.setItem(`tasksArray_${usermail.value}`, JSON.stringify(tasksArray));

        Title.value = '';
        tasks.value = '';
    }
});


// TodoPage.addEventListener('load', () => {
if (tasksArray) {
    console.log("ALAYEEEEEE")
    tasksArray.forEach((tasks) => {
        const Taskcard = document.createElement('div');
        Taskcard.classList.add('Taskcard');
        Taskcard.id = "tasksCard";
        console.log("ENTERINGGGG");

        const getTitle = document.createElement("h4");
        getTitle.innerHTML = Title.value;
        Taskcard.appendChild(getTitle);

        const taskHTML = `<div class="task">
            <input type="checkbox">
            <span>${tasks.value}</span>
        </div>`;


        Taskcard.innerHTML += taskHTML;
        container.appendChild(Taskcard);
    });
    container.append(tasksArray);
}
// });




// let usermail = document.getElementById("mymail");
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