import { SingleNote } from "./_SingleNote";
import { Storage } from "./_Storage";
class TaskPanel {
  constructor() {
    this.panelText = document.getElementById("taskPanelText");
    this.addBtn = document.querySelector(".addTaskBtn");
    this.toDoPanel = document.querySelector(".todo_Panel");
    this.tasksContainer = document.querySelector(".tasks_Container");
    this.searchInput = document.getElementById("search_Task");
    this.taskStorage = [];
  }

  addTask() {
    this.addBtn.addEventListener("click", () => {
      const singleNote = new SingleNote();
      if (!this.panelTextValidate()) {
        this.panelText.classList.add("alert");
        this.addBtn.classList.add("alert");
      } else {
        singleNote.setIndex(singleNote, this.taskStorage);
        this.panelText.classList.remove("alert");
        this.addBtn.classList.remove("alert");
        this.tasksContainer.appendChild(
          singleNote.initTask(this.getTaskText())
        );
        singleNote.prepareObj(this.taskStorage, singleNote.dateBar.textContent);
        Storage.setStorage(this.taskStorage);
        this.setEmptyValue();
        singleNote.editTask();
        singleNote.finishTheTask();
        singleNote.deleteTask(this.taskStorage, singleNote.index);
        console.log(this.taskStorage);
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
        return element.noteText;
      });
    };

    this.searchInput.addEventListener("input", () => {
      const values = tasksContent();

      // Clear tasks list
      this.tasksContainer.textContent = "";

      // Compare each task with input value
      const searchedItem = task => {
        return task.includes(this.getSearchText());
      };

      // Get array of match elements
      const searched = values.filter(searchedItem);

      // Render match elements
      searched.forEach(item => {
        const singleNote = new SingleNote();
        this.tasksContainer.appendChild(singleNote.initTask(item));
        singleNote.editTask();
        singleNote.finishTheTask();
        singleNote.deleteTask(this.taskStorage, singleNote.index);
      });
    });
  }
}

export { TaskPanel };
