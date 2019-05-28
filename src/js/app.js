var symbols = ['!', '#', "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var useSymbols = false;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var useNumbers = false;

var lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var useLowercase = false;

var uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var useUppercase = false;

var passwordChars = [];

var charLength = document.getElementById("length").value;

document.getElementById("generate").addEventListener("click", generate, false);

function generate() {
    var charLength = document.getElementById("length").value;

    checkArray();

    appendArrays();

    password(passwordChars, charLength);

    reset();
}

function checkArray() {
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

function appendArrays() {
    if (useSymbols === true) {
        passwordChars = passwordChars.concat(symbols);
    } else {
        console.log("Symbols not used");
    }

    if (useNumbers === true) {
        passwordChars = passwordChars.concat(numbers);
    } else {
        console.log("Symbols not used");
    }

    if (useLowercase === true) {
        passwordChars = passwordChars.concat(lowercase);
    } else {
        console.log("Symbols not used");
    }

    if (useUppercase === true) {
        passwordChars = passwordChars.concat(uppercase);
    } else {
        console.log("Symbols not used");
    }
}

function password(array, totalLength) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    array.length = totalLength;
    var password = array.join('');
    document.getElementById("password").innerHTML = password;
}

function reset() {
    useSymbols = false;
    useNumbers = false;
    useLowercase = false;
    useUppercase = false;
    passwordChars = [];
}