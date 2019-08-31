import {
    runInThisContext
} from "vm";

class SingleNote {
    constructor() {
        this.singleTask = document.createElement('div');
        this.taskText = document.createElement('textarea');
        this.iconEdit = document.createElement('span');
        this.iconDone = document.createElement('span');
        this.iconDelete = document.createElement('span');
    }

    initTask(text) {
        const taskContent = document.createElement('div');
        const dateBar = document.createElement('p');
        const iconCnt = document.createElement('div');

        this.singleTask.className = 'todo_single-task';
        taskContent.className = 'single_task_content';
        dateBar.className = 'task_date';
        this.taskText.className = 'task_text';
        iconCnt.className = 'task_Icons';
        this.iconEdit.className = 'icon icon-edit';
        this.iconDone.className = 'icon icon-done';
        this.iconDelete.className = 'icon icon-delete';

        this.taskText.setAttribute('readonly', 'required');

        dateBar.textContent = `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`;
        this.taskText.textContent = text;

        taskContent.appendChild(dateBar);
        taskContent.appendChild(this.taskText);

        iconCnt.appendChild(this.iconEdit);
        iconCnt.appendChild(this.iconDone);
        iconCnt.appendChild(this.iconDelete);

        this.singleTask.appendChild(taskContent);
        this.singleTask.appendChild(iconCnt);

        return this.singleTask;
    };
    editTask() {
        this.iconEdit.addEventListener('click', () => {
            this.taskText.removeAttribute('readonly');
            this.taskText.focus();
            this.singleTask.classList.add('edit');
        });

        this.taskText.addEventListener('blur', () => {
            this.taskText.setAttribute('readonly', 'required');
            this.singleTask.classList.remove('edit');
        });
    };

    finisTheTask() {
        this.iconDone.addEventListener('click', () => {
            this.singleTask.classList.add('done');
        })
    };

    deleteTask() {
        this.iconDelete.addEventListener('click', () => {
            this.singleTask.classList.add('delete');
            let that = this;
            setTimeout(function () {
                that.singleTask.remove();
            }, 300);
        })
    }


}

export {
    SingleNote
}