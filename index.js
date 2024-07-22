const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alphaSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const alphaNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let charArr = []
let pass1El = document.getElementById("password1")
let pass2El = document.getElementById("password2")
let lenEl = document.getElementById("len-el")

let symEl = document.getElementById("sym-el")
let numEl = document.getElementById("num-el")

function decideArray(sym, num) {
    
    if ((sym.checked === true) && (num.checked === true)){
        charArr = characters
    } else if ((sym.checked === true) && (num.checked === false)) {
        charArr = alphaSym
    } else if ((sym.checked === false) && (num.checked === true)) {
        charArr = alphaNum
    } else {
        charArr = alpha
    }
    return charArr
}

function generatePasswords() {
    lenElVal = lenEl.value || 15;
    
    let finArr = decideArray(symEl, numEl)
    let finArrLen = finArr.length
    
    let pass1 = ""
    for(let i = 0; i < lenElVal; i++) {
        pass1 += finArr[Math.floor(Math.random() * finArrLen)]
    }
    pass1El.value = pass1
    
    let pass2 = ""
    for(let i = 0; i < lenElVal; i++) {
        pass2 += finArr[Math.floor(Math.random() * finArrLen)]
    }
    pass2El.value = pass2
}

function copyPass1(){
    const copyText = document.getElementById("password1");
    copyText.select();
    document.execCommand("copy");         
}

function copyPass2(){
    const copyText = document.getElementById("password2");
    copyText.select();
    document.execCommand("copy");         
}