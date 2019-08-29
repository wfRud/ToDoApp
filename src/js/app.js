import '../scss/style.scss';
import '../images/icons/delete_outline_24px.svg';
import '../images/icons/done_24px.svg';
import '../images/icons/mode_24px.svg';
import {
    TaskPanel
} from './_TaskPanel';

// const task = new SingleNote();
// const todoPanel = document.querySelector('.todo_Panel');

// todoPanel.appendChild(task.initTask());
const taskPanel = new TaskPanel();
taskPanel.addTask();