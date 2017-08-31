document.getElementById('income').onchange = function() {
  const income = Number(document.getElementById('income').value);
  const wealth = Number(document.getElementById('wealth').value);
  document.getElementById('tax').value = ((0.35 * income) + (0.25 * wealth)).toFixed(2);
}

document.getElementById('wealth').onchange = function() {
  const income = Number(document.getElementById('income').value);
  const wealth = Number(document.getElementById('wealth').value);
  document.getElementById('tax').value = ((0.35 * income) + (0.25 * wealth)).toFixed(2);
}
