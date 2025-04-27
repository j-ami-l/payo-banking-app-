function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText)
}

function UpdateInnerText(id, update) {
    document.getElementById(id).innerText = update;
}

function display(id,status){
    document.getElementById(id).style.display = status;
}

function getElement(id){
    return document.getElementById(id)
}