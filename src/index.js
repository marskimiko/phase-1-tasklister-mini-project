const form = document.querySelector('form');

const unorderListElement = document.getElementById('tasks');

function createNewToDo(event) {
  // prevent reloading of page preventDefault
  event.preventDefault();

  // get the input value
  const task = document.querySelector("#new-task-description");
  console.log(`the task value is: ${task.value}`);

  // once you click on submit, do things with inout value
  // extract the value of the input

  // create new list element
  const newList = document.createElement('li');
  newList.textContent = task.value;
  
  unorderListElement.append(newList);

  // clear the input field
  task.value = ''

}



document.addEventListener("DOMContentLoaded", () => {
  
  // get the element by id
  
  // create an event listener when you submit the form, take the value and return and append it as a list item
  
  document.addEventListener('submit', createNewToDo
  
  // function extract the vallue and append it as a list item
  

  )


  // get the form element
  
  // get the ul (unordered list) element
  
  // create a child for list, li (list item) element
  // append to the parent container, unordered list
});

