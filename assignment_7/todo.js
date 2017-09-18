function addTask() {
  const button = document.getElementById('addButton');
  const list = document.getElementById('outputField');
  const input = document.getElementById('inputField');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  const t = document.createTextNode(input.value);
  label.setAttribute('class', 'strikethrough')
  label.appendChild(t);
  const br = document.createElement('br');
  list.appendChild(checkbox);
  list.appendChild(label);
  list.appendChild(br)
  input.value = '';
};

let tasks = {};
