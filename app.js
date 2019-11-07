
const subjectInput = document.getElementById('subject');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const tasksList = document.getElementById('tasks');
//const 

const homeworkList = [];

function addHomework() {
    const subject = subjectInput.value;
    const task = taskInput.value;
    const date = dateInput.value;
    const homework = new Homework(subject, task, date);
    homeworkList.push(homework);
    updateList();
}

function updateList() {
    tasksList.innerHTML = '';
    for (const item of homeworkList) {
        tasksList.innerHTML += getListItem(item);
    }
}

function getListItem(homework) {
    return `
        <a href="#" class="list-group-item list-group-item-action" onclick="editHomework()" value="${homeworkList.length}">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${ homework.subject }</h5>
                <small>${ homework.date }</small>
            </div>
            <p class="mb-1">${ homework.task }</p>
        </a>
    `;
}

function editHomework() {
    const index = event.target.value;
    console.log(index);
    subjectInput.value = homeworkList[index].subject;
    taskInput.value = homeworkList[index].task;
    dateInput.value = homeworkList[index].date;
}

function updateHomework() {
    const task = taskInput.value;
    homeworkList[index].task = task;
    clearFields();
    updateList();
}

function clearFields() {
    subjectInput.value = '';
    taskInput.value = '';
    dateInput.value = '';
}

function deleteHomework() {
    const index = this.value;
    homeworkList.splice(index);
    updateList();
}

class Homework {

    constructor(subject, task, date) {
        this.subject = subject;
        this.task = task;
        this.date = date;
    }

}