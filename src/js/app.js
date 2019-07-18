const symbols = ['!', '#', "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let useSymbols = false;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let useNumbers = false;

const lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let useLowercase = false;

const uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let useUppercase = false;

let passwordChars = [];

let charLength = document.getElementById("length").value;


const generate = () => {
    let charLength = document.getElementById("length").value;
    checkArray();
    appendArrays();
    password(passwordChars, charLength);
    reset();
}
document.getElementById("generate").addEventListener("click", generate, false);

const checkArray = () => {
    if (document.getElementById("symbols").checked === true && useSymbols === false) {
        useSymbols = true;
    } else {
        document.getElementById("password").innerHTML = "none selected";
    }

    if (document.getElementById("numbers").checked === true && useNumbers === false) {
        useNumbers = true;
    } else {
        document.getElementById("password").innerHTML = "none selected";
    }

    if (document.getElementById("lowercase").checked === true && useLowercase === false) {
        useLowercase = true;
    } else {
        document.getElementById("password").innerHTML = "none selected";
    }

    if (document.getElementById("uppercase").checked === true && useUppercase === false) {
        useUppercase = true;
    } else {
        document.getElementById("password").innerHTML = "none selected";
    }
}

const appendArrays = () => {
    if (useSymbols === true) {
        passwordChars = passwordChars.concat(symbols);
    }

    if (useNumbers === true) {
        passwordChars = passwordChars.concat(numbers);
    }

    if (useLowercase === true) {
        passwordChars = passwordChars.concat(lowercase);
    }

    if (useUppercase === true) {
        passwordChars = passwordChars.concat(uppercase);
    }
}

const password = (array, totalLength) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    array.length = totalLength;
    let password = array.join('');
    document.getElementById("password").innerHTML = password;
}

const reset = () => {
    useSymbols = false;
    useNumbers = false;
    useLowercase = false;
    useUppercase = false;
    passwordChars = [];
}