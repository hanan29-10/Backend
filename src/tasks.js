const tasks = [];

let nextTaskId = 1;

export function createTask(title, userId) {
  const task = { id: nextTaskId++, title, userId, completed: false };
  tasks.push(task);
  return task;
}

export function getTasks() {
  return [...tasks];
}

export function getTasksByUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

export function completeTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return undefined;
  }

  task.completed = true;
  return task;
}

export function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return undefined;
  }

  return tasks.splice(taskIndex, 1)[0];
}
