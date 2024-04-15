let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearAll() {
    result.value = '';
}

function clearLast() {
    result.value = result.value.slice(0, -1);
}
