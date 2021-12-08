// const {test, expect, describe } = require('@jest/globals');

const ToDoList = require ('./toDo.js');

it('Check ToDo List function', () => {
  const toDoList = new ToDoList();
  expect(toDoList.add('washing dish')).toEqual({description : 'washing dish',index : 0,completed : false});
});

// describe('Check toDo List functions ', () => {

//   test('check add function ', () => {
//     //  
    
//     expect(ToDoList('Wash dishes')).toEqual({description : "Wash dishes",index : 0,completed : false});
//   });

// });
