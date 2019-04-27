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
    checkArray();
    checkArray();
    checkArray();

    appendArrays();

    password(passwordChars, charLength);

    reset();
}

function checkArray() {
    if (document.getElementById("symbols").checked === true && useSymbols === false) {
        useSymbols = true;
        // console.log('symbols ' + useSymbols);
    } else if (document.getElementById("numbers").checked === true && useNumbers === false) {
        useNumbers = true;
        // console.log('numbers ' + useNumbers);
    } else if (document.getElementById("lowercase").checked === true && useLowercase === false) {
        useLowercase = true;
        // console.log('lowercase ' + useLowercase);
    } else if (document.getElementById("uppercase").checked === true && useUppercase === false) {
        useUppercase = true;
        // console.log('uppercase ' + useUppercase);
    } else {
        // console.log('none selected');
        document.getElementById("password").innerHTML = "none selected";
    }
}

function appendArrays() {
    if (useSymbols === true) {
        passwordChars = passwordChars.concat(symbols);
        // console.log(passwordChars);
    } else {
        console.log("Symbols not used");
    }

    if (useNumbers === true) {
        passwordChars = passwordChars.concat(numbers);
        // console.log(passwordChars);
    } else {
        console.log("Symbols not used");
    }

    if (useLowercase === true) {
        passwordChars = passwordChars.concat(lowercase);
        // console.log(passwordChars);
    } else {
        console.log("Symbols not used");
    }

    if (useUppercase === true) {
        passwordChars = passwordChars.concat(uppercase);
        // console.log(passwordChars);
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
    // console.log(array);

    array.length = totalLength;
    var password = array.join('');
    document.getElementById("password").innerHTML = password;
    // console.log(password);
    // console.log(array);
}

function reset() {
    useSymbols = false;
    useNumbers = false;
    useLowercase = false;
    useUppercase = false;
    passwordChars = [];
}