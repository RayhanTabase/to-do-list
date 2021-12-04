import LocalStorage from './storage.js';
import ListItem from './listItem.js';

export default class ToDoList {
  // change status(completed) of to-do item
  static changeStatus(index, status) {
    const model = LocalStorage.getList();
    const listItem = model.find((item) => item.index === index);
    listItem.completed = status;
    LocalStorage.save(model);
  }

  // Add
  static add(newInput) {
    // Add if input is not empty
    if (newInput.trim().length > 0) {
      const model = LocalStorage.getList();
      const newIndex = model.length + 1;
      const newItem = new ListItem(newInput, newIndex);
      model.push(newItem);
      LocalStorage.save(model);
      return newItem;
    }
    return false;
  }

  // Update
  static update(description, index) {
    const model = LocalStorage.getList();
    const listItem = model.find((item) => item.index === index);
    listItem.description = description;
    LocalStorage.save(model);
  }

  // Delete
  static delete(index) {
    const model = LocalStorage.getList();
    let newModel = model.filter((item) => item.index !== index);
    newModel = this.reAssignIndex(newModel);
    LocalStorage.save(newModel);
  }

  // Delete completed
  static deleteCompleted() {
    const model = LocalStorage.getList();
    let newModel = model.filter((item) => item.completed === false);
    newModel = this.reAssignIndex(newModel);
    LocalStorage.save(newModel);
  }

  // Adjusts list index values to match actual index
  static reAssignIndex(model) {
    model.forEach((item, index) => {
      item.index = index + 1;
    });
    return model;
  }
}
