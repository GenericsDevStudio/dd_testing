// Environment

const subjectInput = document.getElementById('subject');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');

//


const homeworkList = [];

function addHomework() {
    const subject = subjectInput.value;
    const task = taskInput.value;
    const date = dateInput.value;

    const homework = new Homework(subject, task, date);

    this.homeworkList.push(homework);
}

function editHomework() {

}

function updateHomework() {
    
}

function deleteHomework() {
    const index = this.value;
    homeworkList.splice(index);
}




class Homework {

    constructor(subject, homework, date) {
        this.subject = subject;
        this.homework = homework;
        this.date = date;
    }

}