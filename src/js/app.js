import "../scss/style.scss";

import { TaskPanel } from "./_TaskPanel";
import { Storage } from "./_Storage";

const taskPanel = new TaskPanel();

taskPanel.addTask();
taskPanel.searching();

Storage.displayStorage();
