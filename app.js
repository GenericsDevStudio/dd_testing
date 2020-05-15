const test = "test";
const subjectInput = document.getElementById('subject');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const tasksList = document.getElementById('tasks');
const editControls = document.getElementById('edit-controls');
//const 

const homeworkList = [];

function addHomework() {
    const subject = subjectInput.value;
    const task = taskInput.value;
    const date = new Date(dateInput.value).getDate();
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
        <a href="#" id="${ homeworkList.length}" class="list-group-item list-group-item-action" onclick="editHomework(this)">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${ homework.subject}</h5>
                <small>${ homework.date}</small>
            </div>
            <p class="mb-1">${ homework.task}</p>
        </a>
    `;
}

function editHomework(target) {
    index = target.id - 1;
    subjectInput.value = homeworkList[index].subject;
    taskInput.value = homeworkList[index].task;
    dateInput.value = homeworkList[index].date;
    switchInputFileds();
}

function updateHomework() {
    const task = taskInput.value;
    homeworkList[index].task = task;
    clearFields();
    updateList();
    switchInputFileds();
}

function deleteHomework() {
    homeworkList.splice(index - 1);
    updateList();
    clearFields();
    switchInputFileds();
}

function clearFields() {
    subjectInput.value = '';
    taskInput.value = '';
    dateInput.value = '';
}

function switchInputFileds() {
    editControls.style.display = editControls.style.display == 'none' ? 'block' : 'none';
    subjectInput.disabled = !subjectInput.disabled;
    dateInput.disabled = !dateInput.disabled;
}

class Homework {

    constructor(subject, task, date) {
        this.subject = subject;
        this.task = task;
        this.date = date;
    }

}
