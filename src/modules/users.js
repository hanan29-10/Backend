const users = [];

let nextUserId = 1;

export function createUser(name, email) {
  const user = { id: nextUserId++, name, email };
  users.push(user);
  return user;
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function getUsers() {
  return [...users];
}
