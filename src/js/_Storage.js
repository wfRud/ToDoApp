import { SingleNote } from "./_SingleNote";

import { TaskPanel } from "./_TaskPanel";

const taskStorage = [];

class Storage {
  static taskStorage() {
    return taskStorage;
  }

  static setStorage(obj) {
    localStorage.setItem("Items", JSON.stringify(obj));
  }
  static getStorage() {
    const retriveObject = localStorage.getItem("Items");
    return JSON.parse(retriveObject);
  }

  static displayStorage() {
    if (this.getStorage() !== null) {
      let storage = this.getStorage();
      const singleTask = new TaskPanel();
      storage.forEach(element => {
        const singleNote = new SingleNote();
        singleTask.tasksContainer.appendChild(singleNote.initTask());
        // singleTask.taskStorage.push(singleNote);
        this.taskStorage().push(singleNote);
        singleNote.dateBar.textContent = element.date;
        singleNote.taskText.textContent = element.noteText;
        singleNote.index = element.index;
        singleNote.editTask();
        singleNote.deleteTask(this.taskStorage());
        singleNote.finishTheTask();

        console.log(singleTask.taskStorage);
        console.log(singleTask);
      });
    } else {
      console.log(`Storage is empty`);
    }
  }
}

export { Storage };
