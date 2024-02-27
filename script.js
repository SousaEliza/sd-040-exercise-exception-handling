function calculateSum() {
  const value1 = Number(document.getElementById('value1').value);
  const value2 = Number(document.getElementById('value2').value);
  if (value1 <= 0 || value2 <= 0) {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    throw new Error('Informe dois números para realizar a soma');
  }
  const result = value1 + value2;

  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  let result;
  try {
    result = calculateSum();
  } catch (error) {
    result = error.message;
    return result;
  } finally {
    displayResult(result);
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
