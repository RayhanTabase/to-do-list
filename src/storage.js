export default class LocalStorage {
  // retrieve to-do list
  static getList() {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    if (!toDoList) {
      toDoList = [{
        description: 'take out trash',
        completed: false,
        index: 0,
      },
      {
        description: 'wash dishes',
        completed: false,
        index: 1,
      },
      {
        description: 'walk dog',
        completed: false,
        index: 2,
      }];
    }
    return toDoList;
  }

  // save list to local storage
  static save(list) {
    localStorage.setItem('toDoList', JSON.stringify(list));
  }
}