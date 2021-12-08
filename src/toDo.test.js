// const {test, expect, describe } = require('@jest/globals');

const ToDoList = require ('./toDo.js');
const LocalStorage = require ('./storage.js');
const ListItem = require ('./listItem.js')

it('Check ToDo List function', () => {
  const toDoList = new ToDoList();
  expect(toDoList.add('washing dish')).toEqual({description : 'washing dish',index : 0,completed : false});
});

// describe('Check toDo List functions ', () => {
//
//   test('check add function ', () => {
//     //
//
//     expect(new ToDoList('I am the add function')).toEqual('I am the add function');
//   });
//
// });
