import './style.css';

const toDoItems = [
  {
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
  },
];

function component() {
  const element = document.createElement('ul');
  const refresh = document.createElement('li');
  refresh.innerHTML = `
    <p class="header">Today's To Do</p>
    <button class="button"><i class="fas fa-sync"></i></button>
  `;
  element.appendChild(refresh);

  const add = document.createElement('li');
  add.classList.add('inputNew');
  add.innerHTML = `
    <input placeholder="Add to your list..."> 
    <button class="button"><i class="fas fa-reply"></i></button>
  `;
  element.appendChild(add);

  toDoItems.forEach((item) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `
     <input type="checkbox" class="checkbox">
     <p class="title">${item.description}</p> 
     <button class="button"><i class="fas fa-ellipsis-v"></i></button>
    `;

    // <i class="far fa-trash-alt"></i> - trash.delete icon
    listElement.classList.add('toDoItem');
    element.appendChild(listElement);
  });

  const clearCompleted = document.createElement('li');
  clearCompleted.classList.add('clearCompleted');
  clearCompleted.innerHTML = '<button>Clear all completed</button>';
  element.appendChild(clearCompleted);

  return element;
}

document.querySelector('#toDoListContainer').appendChild(component());