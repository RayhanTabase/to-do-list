import LocalStorage from './storage.js';

export default class ToDoList {
  // change status(completed) of to-do item
  static changeStatus(index, status) {
    let model = LocalStorage.getList();
    const listItem = model.find((item) => item.index === index);
    listItem.completed = status;
    LocalStorage.save(model);
  }
}
