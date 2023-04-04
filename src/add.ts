import { output, memory, dot, operands, operators, equationes, secondCol, DegReg, plusMinus, FixedExpo, clearAll, clearOne, mc, mr, ms, mMinus, mPlus, func, funcList, trigo, trigoList, funcListItem, trigoListItem, equalTo, btnChange } from "./module/utils.js";
import errorMsg from "./module/errorMessage.js";
import { Evaluate } from "./module/Evaluate.js";
import { operand, operator, equation, getValidDecimal, changeValidDecimal } from "./module/MathInput.js";
let redToDegree: string = "degree";

dot.addEventListener('click', function () {
    if (!getValidDecimal()) {
        dot.disabled = true;
    }
    changeValidDecimal(true);
})

secondCol.addEventListener('click', function () {
    if (secondCol.classList.contains('active')) {
        secondCol.classList.remove('active');
    }
    else {
        secondCol.classList.add('active')
    }

    for (let i: number = 0; i < btnChange.length; i++) {
        const element = btnChange[i] as HTMLButtonElement;
        if (element.classList.contains('btn-hide')) {
            element.classList.add('btn-show')
            element.classList.remove('btn-hide')
        } else {
            element.classList.add('btn-hide')
            element.classList.remove('btn-show')
        }
    }
})

DegReg.addEventListener('click', () => {
    let EvaluateVal = Evaluate(output.value)
    if (redToDegree == "degree") {
        output.value = (Number(EvaluateVal) * Math.PI / 180).toFixed(2);
        DegReg.innerHTML = "RED"
        redToDegree = "redians";
    } else {
        output.value = (Number(EvaluateVal) * 180 / Math.PI).toFixed(2);
        DegReg.innerHTML = "DEG"
        redToDegree = "degree";
    }
})


// Changing the Equation Sign
plusMinus.addEventListener('click', () => {
    output.value = Math.sign(parseFloat(output.value)) == -1 ? output.value.substring(1) : "-" + output.value;
})
// Work when user Click on F-E
FixedExpo.addEventListener('click', () => {
    let EvaluateVal = parseFloat(String(Evaluate(output.value)))
    output.value = EvaluateVal.toExponential(10);
})

//Clearing the Input
clearAll.addEventListener('click', () => { clearInput('ac') })
clearOne.addEventListener('click', () => { clearInput('c') })


function clearInput(val: string) {
    //Clear All Value
    if (val == 'ac') {
        output.value = '';
        changeValidDecimal(false)
        dot.disabled = false;
    }
    if (val == 'c') {
        //Clear single Char 
        output.value = output.value.slice(0, -1)
        if (isNaN(Number(output.value[output.value.length - 1])) && output.value[output.value.length - 1] != undefined) {
            dot.disabled = true;
        } else if (output.value[output.value.length] == ".") {
            dot.disabled = false;
        } else {
            dot.disabled = false;
        }
    }
}

// Memory Storage Functions

// Clear the Memory

mc.addEventListener('click', function () {
    localStorage.removeItem("Memory")
    memory.innerHTML = '';
})

// Recall the Memory
mr.addEventListener('click', function () {
    output.value = memory.innerHTML = String(localStorage.getItem("Memory"));
})

// Addtion to Memory
mPlus.addEventListener('click', function () {
    let EvaluateVal: number | undefined = Evaluate(output.value);
    if (EvaluateVal != undefined) {
        EvaluateVal = Number(localStorage.getItem("Memory")) + EvaluateVal;
        localStorage.setItem("Memory", String(EvaluateVal))
        output.value = memory.innerHTML = String(localStorage.getItem("Memory"));
    }
})

// Subtraction to Memory
mMinus.addEventListener('click', function () {
    let EvaluateVal: number | undefined = Evaluate(output.value);
    if (EvaluateVal != undefined) {
        EvaluateVal = Number(localStorage.getItem("Memory")) - EvaluateVal;
        localStorage.setItem("Memory", String(EvaluateVal))
        output.value = memory.innerHTML = String(localStorage.getItem("Memory"));
    }
})

// Store value to Memory
ms.addEventListener('click', function () {
    localStorage.setItem("Memory", JSON.parse(String(Evaluate(output.value))))
    output.value = memory.innerHTML = String(localStorage.getItem("Memory"));
})

// Hide and Show Trigo and Functions
func.addEventListener('click', () => {
    funcList.classList.toggle("show");
})

trigo.addEventListener('click', () => {
    trigoList.classList.toggle("show");
})

window.onclick = function (event: MouseEvent) {
    output.focus();
    console.log();
    var ButtonType = event.target as HTMLButtonElement;
    console.log();

    if (!ButtonType.classList.contains('btn-func')) {
        for (let i = 0; i < funcListItem.length; i++) {
            var openDropdown = funcListItem[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!ButtonType.classList.contains('btn-trigo')) {
        for (let i = 0; i < trigoListItem.length; i++) {
            var openDropdown = trigoListItem[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Evaluate the Postfix Equation

// Run When  user Click on Equal To Sign
equalTo.addEventListener('click', function () {
    // Infix To PostFix 
    try {
        output.value = String(Evaluate(output.value));
    } catch (error) {
        console.log(error);
        errorMsg();
    }

})

// Evaluate on Press Enter
window.addEventListener("keydown", function (e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        try {
            output.value = String(Evaluate(output.value));
        } catch (error) {
            errorMsg();
        }
    }
    if (e.code === "NumpadDecimal" || e.code === "Period") {
        if (getValidDecimal()) {
            e.preventDefault();
        }

        changeValidDecimal(true)
    }

    if (e.code === "NumpadAdd" || e.code === "NumpadSubtract" || e.code === "NumpadMultiply" || e.code === "NumpadDivide" || e.code === "Minus") {
        changeValidDecimal(false)
    }
})

window.onload = function () {
    output.focus();
    for (let i = 0; i < operators.length; i++) {
        const element = operators[i] as HTMLButtonElement;
        element.onclick = () => { operator(element.value) }
    }
    for (let i = 0; i < equationes.length; i++) {
        const equationItem = equationes[i] as HTMLButtonElement;
        equationItem.onclick = () => { equation(equationItem.value) }
    }
    for (let i = 0; i < operands.length; i++) {
        const operandItem = operands[i] as HTMLButtonElement;
        operandItem.onclick = () => { operand(operandItem.value) }
    }

    // Gte the Memory from Storage
    if (localStorage.getItem("Memory")) {
        memory.innerText = String(localStorage.getItem("Memory"))
    }
}