
function addTodisplay(value) {
    document.getElementById('pre').value += value;
}
function clearDisplay() {
    document.getElementById('pre').value = '';

}
function calculate() {
    try {
        var result = eval(document.getElementById('pre').value);
        document.getElementById('pre').value = result;
    }
    catch (error) {
        document.getElementById('pre').value = 'error';

    }
}
function clearLast() {
    var display = document.getElementById('pre');
    display.value = display.value.slice(0, -1);
}


