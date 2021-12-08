const {test, expect, describe } = require('@jest/globals');

const ToDoList = require ('./toDo.js');

describe('Check toDo List functions ', () => {

  test('check add function ', () => {
    expect(ToDoList.add('Wash dishes')).toEqual({description : "Wash dishes",index : 0,completed : false});
  });

});
