
const operator = prompt('enter operator to perform operation ' + ( '+, - , * , / ')); 
const num1 = parseFloat(prompt('Enter First Number'));
const num2 = parseFloat(prompt('Enter Second Number'));

if  ( operator == '+'){
    result = num1 + num2;
} else if ( operator == '-'){
    result = num1 - num2;
} else if ( operator == '*'){
    result = num1 * num2;
} else if ( operator == '/'){
    result = num1 / num2;
}else{
    window.alert("Please restart the Calculator");
}
result = ('The answer is ' + result);
window.alert(result);