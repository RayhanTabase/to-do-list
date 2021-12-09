const ListItem = require('./listItem.js');
const LocalStorage = require('./storage.js');
const { update } = require('./toDo.js');
const ToDoList = require('./toDo.js');

describe('Check toDo List functions ', () => {
  test('check add function ', () => {
    expect(ToDoList.add('washing dish')).toEqual({ description: 'washing dish', index: 1, completed: false });
  });

  test('check add function, empty value ', () => {
    expect(ToDoList.add('')).toEqual(false);
  });

  test('check delete function ', () => {
    ToDoList.delete(1);
    expect(LocalStorage.getList()).toHaveLength(0);
  });

  test('check update function ', () => {
      ToDoList.add('washing dish');
      ToDoList.update('Clean the dish', 1);
      const listItem = LocalStorage.getList().find((item) => item.index === 1);
      expect(listItem.description).toEqual('Clean the dish');
  });

  test('check the task completed', () => {
    ToDoList.changeStatus(1, true);
    const listItem = LocalStorage.getList().find((item) => item.index === 1);
    expect(listItem.completed).toBe(true);
  });

  test('Clear All completed', () => {
    ToDoList.deleteCompleted();
    const newModel = LocalStorage.getList();
    expect(newModel).toHaveLength(0);
  });
});
