let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);
        if (buttonText == 'X') { /**X is not any function in calculator so asign its value to '*' multiplication */
            buttonText = '*';
            screenValue += buttonText; /** screenValue is asign to that perticular button Text */
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = " ";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });

}