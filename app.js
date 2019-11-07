
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
        <a href="#" class="list-group-item list-group-item-action" onclick="editHomework()">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${ homework.subject }</h5>
                <small>${ homework.date }</small>
            </div>
            <p class="mb-1">${ homework.task }</p>
        </a>
    `;
}

function editHomework() {
    console.log(this);
    const index = this.value;
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

    constructor(subject, homework, date) {
        this.subject = subject;
        this.homework = homework;
        this.date = date;
    }

}