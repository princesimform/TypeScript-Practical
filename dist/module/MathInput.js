import errorMsg from "./errorMessage.js";
import { dot, output } from "./utils.js";
import { Evaluate } from "./Evaluate.js";
let validDecimal = false;
const changeValidDecimal = (validDecimalValue) => { validDecimal = validDecimalValue; };
const getValidDecimal = () => { return validDecimal; };
function operand(val) {
    output.value += val;
}
function operator(value) {
    if (value != '=') {
        output.value += value;
    }
    validDecimal = false;
    dot.disabled = false;
}
//Woking for Equations Which are Define in the calculator
function equation(operator) {
    var EvaluateVal = 0;
    try {
        var EvaluateVal = Number(Evaluate(output.value));
    }
    catch (error) {
        errorMsg();
    }
    switch (operator) {
        case "ln":
            output.value = String(Evaluate(EvaluateVal + "log2.718"));
            break;
        case "log":
            output.value = String(Evaluate(EvaluateVal + "log10"));
            break;
        case "pow10":
            output.value = String(Evaluate("10^" + EvaluateVal));
            break;
        case "pow2":
            output.value = String(Evaluate("2^" + EvaluateVal));
            break;
        case "square-root":
            output.value = String(Evaluate(`2√${EvaluateVal}`));
            break;
        case "cube-root":
            output.value = String(Evaluate(`3√${EvaluateVal}`));
            break;
        case "square":
            output.value = String(Evaluate(EvaluateVal + "^2"));
            break;
        case "cube":
            output.value = String(Evaluate(`${EvaluateVal}^3`));
            break;
        case "oneByNum":
            output.value = String(Evaluate("1/" + EvaluateVal));
            break;
        case "fact":
            let value = parseFloat(String(EvaluateVal));
            var fact = 1;
            for (let i = 1; i <= value; i++) {
                fact *= i;
            }
            output.value = String(fact);
            break;
        case "exp":
            // E = 2.79 , Math.exp()
            output.value = String(Evaluate("2.7183^" + EvaluateVal));
            break;
        case "pi":
            if (output.value) {
                output.value = String(Evaluate(`${EvaluateVal}*${Math.PI.toFixed(2)}`));
            }
            else {
                output.value = Math.PI.toFixed(2);
            }
            break;
        case "euler":
            if (output.value) {
                output.value = String(Evaluate(`${EvaluateVal}*${Math.E.toFixed(2)}`));
            }
            else {
                output.value = Math.E.toFixed(2);
            }
            break;
        case "sin":
            output.value = Math.sin(EvaluateVal).toFixed(2);
            break;
        case "asin":
            output.value = Math.asin(EvaluateVal).toFixed(2);
            break;
        case "cos":
            output.value = Math.cos(EvaluateVal).toFixed(2);
            break;
        case "acos":
            output.value = Math.acos(EvaluateVal).toFixed(2);
            break;
        case "tan":
            output.value = Math.tan(EvaluateVal).toFixed(2);
            break;
        case "atan":
            output.value = Math.atan(EvaluateVal).toFixed(2);
            break;
        case "sinh":
            output.value = Math.sinh(EvaluateVal).toFixed(2);
            break;
        case "cosh":
            output.value = Math.cosh(EvaluateVal).toFixed(2);
            break;
        case "tanh":
            output.value = Math.tanh(EvaluateVal).toFixed(2);
            break;
        case "abs":
            output.value = String(Math.abs(EvaluateVal));
            break;
        case "floor":
            output.value = String(Math.floor(EvaluateVal));
            break;
        case "ceil":
            output.value = String(Math.ceil(EvaluateVal));
            break;
        default:
            break;
    }
}
export { operand, operator, equation, changeValidDecimal, getValidDecimal };
