const addTask = () => {
  const button = document.getElementById('addButton');
  const list = document.getElementById('outputField');
  const input = document.getElementById('inputField');
  if (input.value === '') {
    return null;
  }
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('onchange', 'numberFunction()');
  const label = document.createElement('label');
  const t = document.createTextNode(input.value);
  label.setAttribute('class', 'strikethrough')
  label.appendChild(t);
  const br = document.createElement('br');

  const oldDate = new Date(1970, 1, 1, 0, 0, 0);
  const nowDate = new Date();
  const dateDiff = nowDate.getTime() - oldDate.getTime();

  const div = document.createElement('div');
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(br);

  const tasks = {};
  tasks[dateDiff] = div;
  console.log(tasks);

  list.appendChild(div);
  input.value = '';
};

const checkIfChecked = () => {
  const checkbox = document.querySelectorAll("input[type=checkbox]");
  let number = 0;
  for (let i = 0; i < checkbox.length; i++){
    checkbox[i].checked ? number++ : null;
  }
  return number;
};

const numberFunction = () => {
  const done = document.getElementById('done');
  const numberOfCheckboxes = document.querySelectorAll("input[type=checkbox]").length;
  done.innerHTML = checkIfChecked() + '/' + numberOfCheckboxes +  ' is checked';
};
