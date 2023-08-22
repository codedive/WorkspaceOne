const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value // i want to get that and want to parse it as number by just adding  + 
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol // this will tell ke 4 me se kitne chekbox tick h
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]) // so basically what this filter will do is filter out anyhting that has false as value
    // this line will give result as 0:{lower:false} // when checkbox not clicked
    //similary for 1:{:false} and so on and is show as mix of true and false value but we dont want yo show false values in array so use filter

    // now  we have checked section and uncheck and now lets check and see if 
    //there no type check othing is actuallu checked we just we dont want to do anything right
    if(typesCount === 0){ 
        // jab hum kuch bhi tick nhi krenghe toh neche genarate krne pur console m kuch nhi ayegha
        return ''
    }

    for(let i = 0; i < length; i += typesCount) { //lenght 20 limit
        //typescount mtlb jo jo condi hum fulfil krenghe
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
    // get the func for no symbol lower upper based on the randomfunc above
    // so it basically get what returned from that specified func  it can be upper number symbol  lower upper   
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}
// for genearating randomchar of lowercase
function getRandomLower() {
//string object used to represent and manipulate seq of char
//string.fromcharcode return a string  created for specified seq of utf-16 code unit
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    // mult by highest random no as  i want to get which is 26
    //eg 1+97=98 which would be b 
    // multiplied any no upto 26 bcs e 26char are there in english  alphabet
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    // uppercase a was 65
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// 0 has char code of 48

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}