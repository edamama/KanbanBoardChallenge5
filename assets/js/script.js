// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) { // I put this function below as 'addElements'

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

    let focus = event.target;
    focus.remove();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});




//////////////////////////////////////////////////

let taskObjArray = JSON.parse(localStorage.getItem("Task List")) || [];

commitTaskBtnEl = document.getElementById("commitTaskBtn");

taskTitleEl = document.getElementById("taskTitle");
datepickerEl = document.getElementById("datepicker");
taskDescriptionBoxEl = document.getElementById("taskDescriptionBox");
toDoSectionEl = document.querySelector("#todo-cards");

commitTaskBtnEl.addEventListener("click",function(event){

    if(taskTitleEl.value && datepickerEl.value && taskDescriptionBoxEl.value) {

        const taskObj = {

            TaskTitle: taskTitleEl.value,

            TaskDueDate: datepickerEl.value,

            TaskDescription: taskDescriptionBoxEl.value,

        }


        let stringifiedTaskObj = JSON.stringify(taskObj);
        taskObjArray.push(stringifiedTaskObj);

        localStorage.setItem("Task List", JSON.stringify(taskObjArray));

        location.reload(); //immediately updates page
    
    } else{

        event.preventDefault();
        alert("Please enter the required fields.");

    }



});

///////////////////////////////////

$(".taskCard").draggable(); //makes every card on screen draggable

///////////element generation/////////////////////////////////////////////

let newTasks = JSON.parse(localStorage.getItem("Task List"));


for(let i = 0; i < newTasks.length; i++ ){

    function addElements(){

       let newCardDiv = document.createElement("div");
       newCardDiv.setAttribute("class","taskCard");
       document.body.appendChild(newCardDiv); 

       
       let taskNameDiv = document.createElement("div");
       taskNameDiv.setAttribute("id", "nameOfTask");
       newCardDiv.appendChild(taskNameDiv);

       let taskNameH1 = document.createElement("h1");
       taskNameH1.textContent = JSON.parse(newTasks[i]).TaskTitle;
       taskNameDiv.appendChild(taskNameH1);


       let descriptionDiv = document.createElement("div");
       descriptionDiv.setAttribute("id", "descriptionOfTask");
       newCardDiv.appendChild(descriptionDiv);

       let descriptionH2 = document.createElement("h2");
       descriptionH2.textContent = JSON.parse(newTasks[i]).TaskDescription;
       descriptionDiv.appendChild(descriptionH2);


       let dateDiv = document.createElement("div");
       dateDiv.setAttribute("id", "dateDisplay");
       newCardDiv.appendChild(dateDiv);

       let dateH2 = document.createElement("h2");
       dateH2.textContent = JSON.parse(newTasks[i]).TaskDueDate;
       dateDiv.appendChild(dateH2);


       let deleteBtnDiv = document.createElement("div");
       deleteBtnDiv.setAttribute("id","deleteBtnBox");
       newCardDiv.appendChild(deleteBtnDiv);

       let deleteBtn = document.createElement("button");
       deleteBtn.setAttribute("id","deleteBtn");
       deleteBtn.textContent = "DELETE";
       deleteBtnDiv.appendChild(deleteBtn);
    
    }
    
    addElements();

}

//////////////////////////element styling conditions

/* if(currentdate === dueDate - 1(day)){

    taskCard.setAttribute("style","background-color:light-yellow");

}  else if(current date > dueDate){
  
    taskCard.setAttribute("style","background-color:light-red");

    } else{
     
    }
    
}*normal colors**/



for(let i = 0; i < newTasks.length; i++ ){

    let currentDate = dayjs();

    let currentDateNum = currentDate.$D;
    let targetDateNum = dayjs(JSON.parse(newTasks[i]).TaskDueDate).$D; 


    if(targetDateNum - currentDateNum === 1 ){

        taskCardEl.setAttribute("style","background-color:yellow");

    };


};

//fix










////////////////deleting cards

let deleteBtnEl = document.getElementById("deleteBtn");
let taskCardEl = document.querySelector(".taskCard");


deleteBtnEl.addEventListener("click",function(event){
   
    taskCardEl.remove();

});