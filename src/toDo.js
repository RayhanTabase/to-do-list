import LocalStorage from './storage.js';
import HtmlToDo from './html.js';

class listItem {
  constructor(description,index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}

export default class ToDoList {
  // change status(completed) of to-do item
  static changeStatus(index, status) {
    let model = LocalStorage.getList();
    let listItem = model.find((item) => item.index === index);
    listItem.completed = status;
    LocalStorage.save(model);
  }

  // Add 
  static add(newInput) {
    // Add if input is not empty
    if(newInput.trim().length > 1){
      let model = LocalStorage.getList();
      let new_index = model.length + 1;
      let newItem = new listItem(newInput,new_index);
      model.push(newItem);
      LocalStorage.save(model);
      
      // Add new item to the DOM
      let listUl = document.querySelector('.toDoList')
      listUl.appendChild(HtmlToDo.createListItem(newItem));
    }
  }

  // Update
  static update(description , index) {
    let model = LocalStorage.getList();
    let listItem = model.find((item) => item.index === index);
    listItem.description = description;
    LocalStorage.save(model);
    HtmlToDo.toggleEditable()
  }

  // Delete
  static delete(index) {
    let model = LocalStorage.getList();
    let newModel = model.filter((item) => item.index !== index);
    newModel = this.reAssignIndex(newModel);
    LocalStorage.save(newModel);
    HtmlToDo.createStructure()
  }

  // Delete completed
  static deleteCompleted() {
    let model = LocalStorage.getList();
    let newModel = model.filter((item) => item.completed === false);
    newModel = this.reAssignIndex(newModel);
    LocalStorage.save(newModel);
    HtmlToDo.createStructure()
  }

  // Adjusts list index values to match actual index 
  static reAssignIndex(model) {
    model.forEach((item,index) => {
      item.index = index + 1;
    });
    return model;
  }
}
