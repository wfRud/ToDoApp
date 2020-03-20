import { Storage } from "./_Storage";
class SingleNote {
  constructor() {
    this.index = null;
    this.singleTask = document.createElement("div");
    this.taskText = document.createElement("textarea");
    this.dateBar = document.createElement("p");
    this.iconEdit = document.createElement("span");
    this.iconDone = document.createElement("span");
    this.iconDelete = document.createElement("span");
  }

  initTask(text) {
    const taskContent = document.createElement("div");
    const iconCnt = document.createElement("div");

    this.singleTask.className = "todo_single-task";
    taskContent.className = "single_task_content";
    this.dateBar.className = "task_date";
    this.taskText.className = "task_text";
    iconCnt.className = "task_Icons";
    this.iconEdit.className = "icon icon-edit";
    this.iconDone.className = "icon icon-done";
    this.iconDelete.className = "icon icon-delete";

    this.taskText.setAttribute("readonly", "required");

    this.dateBar.textContent = `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`;
    this.taskText.textContent = text;

    taskContent.appendChild(this.dateBar);
    taskContent.appendChild(this.taskText);

    iconCnt.appendChild(this.iconEdit);
    iconCnt.appendChild(this.iconDone);
    iconCnt.appendChild(this.iconDelete);

    this.singleTask.appendChild(taskContent);
    this.singleTask.appendChild(iconCnt);

    return this.singleTask;
  }
  editTask() {
    this.iconEdit.addEventListener("click", () => {
      this.taskText.removeAttribute("readonly");
      this.taskText.focus();
      this.singleTask.classList.add("edit");
    });

    this.taskText.addEventListener("blur", () => {
      this.taskText.setAttribute("readonly", "required");
      this.singleTask.classList.remove("edit");
      Storage.setStorage(this.prepareObjToSetStorage(Storage.taskStorage()));
    });
  }

  finishTheTask() {
    this.iconDone.addEventListener("click", () => {
      this.singleTask.classList.toggle("done");
    });
  }

  deleteTask(arr) {
    this.iconDelete.addEventListener("click", () => {
      this.singleTask.classList.add("delete");
      let that = this;
      setTimeout(function() {
        that.singleTask.remove();
      }, 300);
      this.removeTaskFromStorage(arr);
      this.resetIndex(arr);
      localStorage.clear();
      localStorage.setItem(
        "Items",
        JSON.stringify(this.prepareObjToSetStorage(arr))
      );
    });
  }
  setIndex(arr, value) {
    this.index = arr.findIndex(element => {
      return element.taskText.value === value;
    });
  }
  resetIndex(arr) {
    arr.forEach((el, i) => {
      el.index = i;
      this.index = i;
    });
  }

  removeTaskFromStorage(arr) {
    arr = arr.splice(this.index, 1);
  }

  prepareObjToSetStorage(arr) {
    const objects = arr.map(element => {
      const noteObj = {
        noteText: element.taskText.value,
        date: element.dateBar.textContent,
        index: element.index
      };
      return noteObj;
    });
    return objects;
  }
}

export { SingleNote };
