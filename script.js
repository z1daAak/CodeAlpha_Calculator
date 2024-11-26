let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";  // This will store the current input expression
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Use eval to calculate the result and update the input box
                string = eval(string);
                input.value = string;
            } catch (error) {
                // If there's an error (e.g., malformed expression), display "Error"
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            // Clear the input
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            // Remove the last character
            string = string.slice(0, -1);
            input.value = string;
        } else {
            // Append the button's text to the expression
            string += buttonText;
            input.value = string;
        }
    });
});
