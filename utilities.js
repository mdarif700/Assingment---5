function mySelector(idName) {
    return document.querySelector(`#${idName}`)
}

function inputValidSelector (inputSelector){
    let inputvalues = document.getElementById(inputSelector).value

    let valuesNumber = parseFloat(inputvalues)

    return valuesNumber
}

function textValid (textSelector){
    let textvalues = document.getElementById(textSelector).innerHTML
    let textNumber = parseFloat(textvalues)
    return textNumber
}