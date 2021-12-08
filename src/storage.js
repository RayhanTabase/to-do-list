class LocalStorage {
  // retrieve to-do list
  getList() {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    if (!toDoList) {
      toDoList = [];
    }
    return toDoList;
  }

  // save list to local storage
  save(list) {
    localStorage.setItem('toDoList', JSON.stringify(list));
  }
}
const localStorage = new LocalStorage();
module.exports =  localStorage;
