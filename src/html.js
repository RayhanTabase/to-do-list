import ToDoList from './toDo.js';
import LocalStorage from './storage.js';

export default class HtmlToDo {
  // Edit mode
  static toggleEditable(listElement) {
    document.querySelectorAll('.toDoItem').forEach((element) => {
      const edit = element.querySelector('.item-description');
      const deleteBtn = element.querySelector('.delete-button');
      const moveBtn = element.querySelector('.move-button');

      if (element === listElement) {
        deleteBtn.style.display = 'block';
        moveBtn.style.display = 'none';
        edit.readOnly = false;
        element.classList.add('editing');
      } else {
        deleteBtn.style.display = 'none';
        moveBtn.style.display = 'block';
        edit.readOnly = true;
        element.classList.remove('editing');
      }
    });
  }

  // Create list element
  static createListItem(item) {
    const listUl = document.querySelector('.toDoList');
    const listElement = document.createElement('div');
    listElement.dataset.index = item.index;
    listElement.classList.add('toDoItem');
    listElement.classList.add('container-list');
    listElement.style.order = item.index;

    let crossed = '';
    if (item.completed) {
      crossed = 'crossed';
    }

    listElement.innerHTML = `
     <input type="checkbox" class="checkbox" data-index=${item.index}>
     <form class="edit-input" data-index=${item.index}> <input data-index=${item.index} type="text" name="title" class="item-description ${crossed}" value="${item.description}" readonly></form>
     <button type="button" class="button" data-index=${item.index}><i data-index=${item.index} class="fas fa-ellipsis-v move-button"></i></button>
     <button type="button" data-index=${item.index} class="button delete-button" data-index=${item.index}><i data-index=${item.index} class="fas fa-trash-alt"></i></button>
    `;

    // Add  status changer
    const completed = listElement.querySelector('.checkbox');
    completed.checked = item.completed;
    completed.addEventListener('change', (e) => {
      ToDoList.changeStatus(item.index, e.target.checked);
      listElement.querySelector('.item-description').classList.toggle('crossed');
    });

    // Add delete feature
    const deleteBtn = listElement.querySelector('.delete-button');
    deleteBtn.addEventListener('click', () => {
      ToDoList.delete(item.index);
      listElement.remove();
    });

    // Handle edit form
    const editForm = listElement.querySelector('.edit-input');
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(editForm);
      const newName = data.get('title');
      ToDoList.update(newName, item.index);
    });

    // Toggle edit
    listElement.querySelector('.item-description').addEventListener('click', () => HtmlToDo.toggleEditable(listElement));

    // Add move/drag feature
    const moveBtn = listElement.querySelector('.move-button');
    moveBtn.addEventListener('mousedown', (e) => {
      listElement.setAttribute('draggable', true);
      listElement.classList.add('dragstart')
    });
  
    listUl.append(listElement);
  }

  // Append list items
  static createListStructure() {
    document.querySelector('.toDoList').innerHTML = '';
    LocalStorage.getList().forEach((item) => {
      HtmlToDo.createListItem(item);
    });
  }

  // Create initial to-do list structure
  static createStructure() {
    const element = document.createElement('div');
    element.className = 'toDoListContainer';

    // Create header section
    const header = document.createElement('div');
    header.classList.add('container-list');
    header.innerHTML = `
      <p class="header">Today's To Do</p>
      <button type="button" class="button"><i class="fas fa-sync"></i></button>
    `;
    header.style.order = 0;
    element.appendChild(header);

    // Create add section
    const add = document.createElement('form');
    add.classList.add('inputNew');
    add.classList.add('container-list');

    add.innerHTML = `
      <input placeholder="Add to your list..." name="title" id="addToListInput"> 
      <button type="submit" class="button"><i class="fas fa-reply"></i></button>
    `;
    add.style.order = 1;
    add.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(add);
      let newItem = data.get('title');
      newItem = ToDoList.add(newItem);
      if (newItem) {
        HtmlToDo.createListItem(newItem);
      }
      add.reset();
    });
    element.appendChild(add);

    // Create list ul
    const listUl = document.createElement('div');
    listUl.classList.add('toDoList');
    listUl.style.order = 2;
    element.appendChild(listUl);

      // Handle drag
    let draggedItem;
    listUl.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
    }, false);
    listUl.addEventListener('dragover', (e) => {
      e.preventDefault();
    }, false);
    listUl.addEventListener('drop', (e)=> {
      e.preventDefault();
      let droppedOnItem = e.target
      // console.log(draggedItem,droppedOnItem)
      ToDoList.changePosition(draggedItem.dataset.index, droppedOnItem.dataset.index)
      HtmlToDo.createListStructure();
    },false)
    listUl.addEventListener('dragend', (e)=> {
      HtmlToDo.createListStructure();
    },false)

    // Add clear completed
    const clearCompleted = document.createElement('div');
    clearCompleted.classList.add('clearCompleted');
    clearCompleted.style.order = 3;
    clearCompleted.innerHTML = '<button type="button">Clear all completed</button>';
    clearCompleted.querySelector('button').addEventListener('click', () => {
      ToDoList.deleteCompleted();
      HtmlToDo.createListStructure();
    });
    element.appendChild(clearCompleted);

    // Append to main content
    const container = document.querySelector('#main');
    return container.appendChild(element);
  }
}