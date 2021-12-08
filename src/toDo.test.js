// const {test, expect, describe } = require('@jest/globals');

const toDoList = require ('./toDo.js');

// beforeEach(() => {
//   // to fully reset the state between tests, clear the storage
//   localStorage.clear();
//   // and reset all mocks
//   jest.clearAllMocks();
  
//   // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
//   localStorage.setItem.mockClear();
// });

// test('should not impact the next test', () => {
//   const KEY = 'foo',
//     VALUE = 'bar';
//   dispatch(action.update(KEY, VALUE));
//   expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
//   expect(localStorage.__STORE__[KEY]).toBe(VALUE);
//   expect(Object.keys(localStorage.__STORE__).length).toBe(1);
// });

it('Check ToDo List function', () => {
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
