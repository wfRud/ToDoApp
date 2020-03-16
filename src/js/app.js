import "../scss/style.scss";
import "../images/icons/delete_outline_24px.svg";
import "../images/icons/done_24px.svg";
import "../images/icons/mode_24px.svg";
import { TaskPanel } from "./_TaskPanel";
import { Storage } from "./_Storage";

const taskPanel = new TaskPanel();
const storage = new Storage();

taskPanel.addTask();
taskPanel.searching();

storage.displayStorage();
