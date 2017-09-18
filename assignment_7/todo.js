let tasks = {};

const addTask = () => {
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
  const oldDate = new Date(1970, 1, 1, 0, 0, 0);
  const nowDate = new Date();
  const dateDiff = nowDate.getTime() - oldDate.getTime();
  tasks[dateDiff] = input.value;
  list.appendChild(checkbox);
  list.appendChild(label);
  list.appendChild(br)
  input.value = '';
  console.log(tasks);
};
