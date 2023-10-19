
// Функция подсчета длины строки
function stringLength(string, length) {
    let currentLength = string.length;
    return currentLength <= length
}

// Вызов функции
console.log(stringLength('Топот', 20))

// Функция для определения полиндромности строки
function polyndromString(string) {
    let lowerCaseString = string.replaceAll(" ", "").toLowerCase()
    let clearString = ''
    for (let i = lowerCaseString.length - 1; i >= 0; i--){
        clearString += lowerCaseString[i]
    }
    console.log(lowerCaseString, clearString)
    return lowerCaseString === clearString
}

// Вызов функции
console.log(polyndromString('Топот'))
