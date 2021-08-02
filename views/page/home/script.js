import Ddds from './ddds.js'

const controller = new Ddds( 
     [
    [11, 16, 1.90],
    [16, 11, 2.90],
    [11, 17, 1.70],
    [17, 11, 2.70],
    [11, 18, 0.90],
    [18 ,11, 1.90]
    ]
)

window.catchData = function catchData( origem, destination, minutes, pack) {
    let valid = true;
    const hasCombinnation = controller.hasCombinnation(origem, destination);
    const validNumber = controller.validMinutes(minutes);
    const validCombination = controller.validateCombination(origem, destination);
    if (!validCombination) {
        valid = false;
        sendResult("-", "-", "withFaleMais", "withoutFaleMais");
        printError("O DDD de origem e Destino iguais","errorMsg");
        return;
    }
    if (!validNumber) {
        valid = false;
        sendResult("-", "-", "withFaleMais", "withoutFaleMais");
        printError("Minutos Invalido","errorMsg");
        return;
    }
    if (!hasCombinnation) {
        valid = false;
        sendResult("-", "-", "withFaleMais", "withoutFaleMais");
        printError("Sem Valores no momento", "errorMsg");
    }
    if (valid) {
        printError("", "errorMsg");
        const calcWithFalemMais = controller.calculateWithFaleMais(origem, destination, minutes, pack);

        const calcOutFalemMais = controller.calculateWithOutFaleMais(origem, destination, minutes);
        sendResult("$" + calcWithFalemMais, "$" + calcOutFalemMais, "withFaleMais","withoutFaleMais");
    }
}

function sendResult(result1, result2, elementId1, elementId2){
    const resultHTTML = document.getElementById(elementId1);
    resultHTTML.innerHTML = `<td id=${elementId1}>${result1}</td>`;
    const result2HTTML = document.getElementById(elementId2);
    result2HTTML.innerHTML = `<td id=${elementId2}>${result2}</td>`;
  
}

function printError(message, elementId) {
    const errorHTML = document.getElementById(elementId);
    errorHTML.innerHTML = `<h3 id=${elementId}>${message}</h3>`;
}




    

     




