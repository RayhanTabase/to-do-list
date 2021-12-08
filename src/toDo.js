// import LocalStorage from './storage.js';
// import ListItem from './listItem.js';

const localStorage = require ('./storage.js')
const ListItem = require ('./listItem.js')

class ToDoList {
  // change status(completed) of to-do item
  changeStatus(index, status) {
    const model = localStorage.getList();
    const listItem = model.find((item) => item.index === index);
    listItem.completed = status;
    localStorage.save(model);
  }

  // Add
  add(newInput) {
    // Add if input is not empty
    if (newInput.trim().length > 0) {
      const model = localStorage.getItem('toDoList');
      const newIndex = model.length + 1;
      const newItem = new ListItem(newInput, newIndex);
      model.push(newItem);
      localStorage.save(model);
      return newItem;
    }
    return false;
  }

  // Update
  update(description, index) {
    const model = localStorage.getList();
    const listItem = model.find((item) => item.index === index);
    listItem.description = description;
    localStorage.save(model);
  }

  // Delete
  delete(index) {
    const model = localStorage.getList();
    let newModel = model.filter((item) => item.index !== index);
    newModel = this.reAssignIndex(newModel);
    localStorage.save(newModel);
  }

  // Delete completed
  deleteCompleted() {
    const model = localStorage.getList();
    let newModel = model.filter((item) => item.completed === false);
    newModel = this.reAssignIndex(newModel);
    localStorage.save(newModel);
  }

  // Adjusts list index values to match actual index
  reAssignIndex(model) {
    model.forEach((item, index) => {
      item.index = index + 1;
    });
    return model;
  }
}

const toDoList = new ToDoList();

module.exports = toDoList;
