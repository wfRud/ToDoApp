import {
    SingleNote
} from "./_SingleNote";

import {
    TaskPanel
} from './_TaskPanel'

class Storage {
    static setStorage(obj) {
        localStorage.setItem('Items', JSON.stringify(obj));
    };
    static getStorage() {
        const retriveObject = localStorage.getItem('Items');
        return JSON.parse(retriveObject);
    };
    static displayStorage() {
        if (this.getStorage() !== null) {
            let storage = this.getStorage();
            storage.forEach(element => {
                const singleTask = new TaskPanel();
                const singleNote = new SingleNote();
                singleTask.toDoPanel.appendChild(singleNote.initTask());
                singleNote.dateBar.textContent = element.date;
                singleNote.taskText.textContent = element.noteText;
                console.log(element);
            });
        } else {
            console.log(`Storage is empty`);
        }

    }

};

export {
    Storage
};