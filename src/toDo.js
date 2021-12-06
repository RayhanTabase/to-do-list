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
    console.log('delete item',index)
    const model = LocalStorage.getList();
    let newModel = model.filter((item) => item.index !== index);
    // Chamge proceding indices
    newModel = ToDoList.reAssignItemIndex(newModel)
    LocalStorage.save(newModel);
  }

  // Delete completed
  static deleteCompleted() {
    console.log('delete completed')
    const model = LocalStorage.getList();
    let newModel = model.filter((item) => item.completed === false);
    // Adjusts All list index values to match actual index + 1
    newModel = ToDoList.reAssignItemIndex(newModel)
    LocalStorage.save(newModel);
  }
  
  // changePosition of index item in array
  static changePosition(oldIndex,newIndex) {
    oldIndex = parseInt(oldIndex)
    newIndex = parseInt(newIndex)
    const model = LocalStorage.getList();

    let changingItem = model.find((item)=> item.index === oldIndex)
    let newModel = model.filter((item)=> item.index !== oldIndex)
    newModel.splice(newIndex-1,0,changingItem)
    newModel = ToDoList.reAssignItemIndex(newModel)
    
    LocalStorage.save(model);
  }

  static reAssignItemIndex(model) {
    for(let i = 0; i < model.length; i++) model[i].index = i+1
    return model;
  }
}
