class SingleNote {
    constructor() {
        this.taskText = document.createElement('textarea');
        this.iconEdit = document.createElement('span');
        this.iconDone = document.createElement('span');
        this.iconDelete = document.createElement('span');
    }

    initTask(text) {
        const singleTask = document.createElement('div');
        const taskContent = document.createElement('div');
        const dateBar = document.createElement('p');
        const iconCnt = document.createElement('div');

        singleTask.className = 'todo_single-task';
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

        singleTask.appendChild(taskContent);
        singleTask.appendChild(iconCnt);

        return singleTask;
    }


}

export {
    SingleNote
}