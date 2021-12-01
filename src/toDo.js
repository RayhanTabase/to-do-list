import { LocalStorage } from "./storage.js";
import listModel from "./listModel.js";

export class ToDoList {

  // change status(completed) of to-do item
  static changeStatus(index,status,e) {
    console.log(index)
    let model = LocalStorage.getList()
    if (model.lenth < 1){
      model = listModel
    }
    let listItem = model.find( (item) => item.index === index)
    listItem.completed = status;
    LocalStorage.save(model)
  }
}
