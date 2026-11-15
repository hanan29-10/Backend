# Task User Manager

A simple Node.js application that manages users and tasks with in-memory data. It uses ECMAScript modules (ESM).

## Project structure

```
src/
  index.js   # Application entry point
  users.js   # User data and operations
  tasks.js   # Task data and operations
```

## Features

- Create and list users
- Create and list tasks
- Find tasks assigned to a user
- Mark a task as complete
- Delete a task

## Run the project

```bash
npm start
```

On PowerShell systems that block the `npm` script, use:

```bash
npm.cmd start
```

## Development mode

```bash
npm run dev
```

This restarts the application whenever a source file changes.
