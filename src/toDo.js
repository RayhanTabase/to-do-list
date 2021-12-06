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
    // Chamge proceding indices
    newModel = ToDoList.reAssignItemIndex(index)
    LocalStorage.save(newModel);
  }

  // Delete completed
  static deleteCompleted() {
    const model = LocalStorage.getList();
    let newModel = model.filter((item) => item.completed === false);
    // Adjusts All list index values to match actual index + 1
    newModel = ToDoList.reAssignItemIndex(1)
    LocalStorage.save(newModel);
  }
  
  // changePosition of index item in array
  static changePosition(itemIndex,newIndex) {
    const model = LocalStorage.getList();
    let listItem =  model.find((item) => item.index === itemIndex)
    let newModel = model.filter((item) => item.index !== itemIndex);
    newModel.splice(newIndex-1,0,listItem)
    // Chage items indices
    newModel = ToDoList.reAssignItemIndex(newIndex,newModel)
    LocalStorage.save(newModel);
  }

  static reAssignItemIndex(startIndex, model) {
    for(let i = startIndex -1; i < newModel.length; i++) newModel[i].index = i+1
    return model;
  }
}
