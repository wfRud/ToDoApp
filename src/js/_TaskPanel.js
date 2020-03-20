import { SingleNote } from "./_SingleNote";
import { Storage } from "./_Storage";
class TaskPanel {
  constructor() {
    this.panelText = document.getElementById("taskPanelText");
    this.addBtn = document.querySelector(".addTaskBtn");
    this.toDoPanel = document.querySelector(".todo_Panel");
    this.tasksContainer = document.querySelector(".tasks_Container");
    this.searchInput = document.getElementById("search_Task");
  }

  addTask() {
    this.addBtn.addEventListener("click", () => {
      if (!this.panelTextValidate()) {
        this.panelText.classList.add("alert");
        this.addBtn.classList.add("alert");
      } else {
        const singleNote = new SingleNote();
        this.panelText.classList.remove("alert");
        this.addBtn.classList.remove("alert");
        this.tasksContainer.appendChild(
          singleNote.initTask(this.getTaskText())
        );
        Storage.taskStorage().push(singleNote);
        singleNote.setIndex(Storage.taskStorage(), this.getTaskText());
        Storage.setStorage(
          singleNote.prepareObjToSetStorage(Storage.taskStorage())
        );
        this.setEmptyValue();
        singleNote.editTask();
        singleNote.finishTheTask();
        singleNote.deleteTask(Storage.taskStorage());
      }
    });
  }

  getTaskText() {
    return this.panelText.value;
  }
  getSearchText() {
    return this.searchInput.value;
  }
  setEmptyValue() {
    return (this.panelText.value = "");
  }

  panelTextValidate() {
    if (this.panelText.value === "") {
      return false;
    } else return true;
  }

  searching() {
    // Get tasks text from storage to compare with search input value
    const tasksContent = () => {
      const tasks = Storage.getStorage();
      return tasks.map(element => {
        return { noteText: element.noteText, index: element.index };
      });
    };

    this.searchInput.addEventListener("input", () => {
      const values = tasksContent();

      // Clear tasks list
      this.tasksContainer.textContent = "";

      // Compare each task with input value
      const searchedItem = task => {
        return task.noteText.includes(this.getSearchText());
      };

      // Get array of match elements
      const searched = values.filter(searchedItem);

      // Render match elements
      searched.forEach(item => {
        const singleNote = new SingleNote();
        this.tasksContainer.appendChild(singleNote.initTask(item.noteText));
        singleNote.index = item.index;
        singleNote.editTask();
        singleNote.finishTheTask();
        singleNote.deleteTask(Storage.taskStorage());
      });
    });
  }
}

export { TaskPanel };
