import {
    SingleNote
} from './_SingleNote';
import {
    Storage
} from './_Storage';
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
                this.addBtn.classList.add('alert');
            } else {
                singleNote.setIndex(singleNote, this.taskStorage);
                this.paneltext.classList.remove('alert');
                this.addBtn.classList.remove('alert');
                this.toDoPanel.appendChild(singleNote.initTask(this.getTaskText()));
                singleNote.prepareObj(this.taskStorage, singleNote.dateBar.textContent);
                Storage.setStorage(this.taskStorage);
                this.setEmptyValue();
                singleNote.editTask();
                singleNote.finisTheTask();
                singleNote.deleteTask(this.taskStorage, singleNote.index);
            };
        });
    };

    getTaskText() {
        return this.paneltext.value;
    };
    setEmptyValue() {
        return this.paneltext.value = "";
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