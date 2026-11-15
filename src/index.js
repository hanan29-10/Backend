import { completeTask, createTask, deleteTask, getTasks, getTasksByUser } from './modules/tasks.js';
import { createUser, getUsers } from './modules/users.js';

const ada = createUser('Ada lace', 'ada@example.com');
const linus = createUser('Linus Tom', 'linus@example.com');

const writeDocs = createTask('Write project documentation', ada.id);
createTask('Review pull request', ada.id);
const configureCi = createTask('Configure CI pipeline', linus.id);

completeTask(writeDocs.id);
deleteTask(configureCi.id);

console.log('Users:');
console.table(getUsers());

console.log('Ada\'s tasks:');
console.table(getTasksByUser(ada.id));

console.log('All remaining tasks:');
console.table(getTasks());
