import {
    SingleNote
} from './_SingleNote';

class TaskPanel {
    constructor() {
        this.paneltext = document.getElementById('taskPanelText');
        this.addBtn = document.querySelector('.addTaskBtn');
        this.toDoPanel = document.querySelector('.todo_Panel');
        this.taskStorage = [];
    }

    addTask() {
        this.addBtn.addEventListener('click', () => {
            const singleNote = new SingleNote();
            if (!this.panelTextValidate()) {
                this.paneltext.classList.add('alert');
            } else {
                this.paneltext.classList.remove('alert');
                this.toDoPanel.appendChild(singleNote.initTask(this.getTaskText()));
                this.setEmptyValue();
                this.pushTaskToStorage(singleNote);
                this.getTasks();
            }
        });
    };

    getTaskText() {
        return this.paneltext.value;
    };
    setEmptyValue() {
        return this.paneltext.value = "";
    };
    pushTaskToStorage(element) {
        this.taskStorage.push(element);
    }
    getTasks() {
        console.log(this.taskStorage);
    };

    panelTextValidate() {
        if (this.paneltext.value === "") {
            return false;
        } else return true;
    }
};

export {
    TaskPanel
}