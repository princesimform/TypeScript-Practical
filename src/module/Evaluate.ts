import { LinkedStack, stackNode, InfixToPostfix, PostFix } from "./EX.js";
import { output } from "./utils.js";
function Evaluate(equ: string): number | undefined {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal: Array<string> = infixToPostfix.getPostfix();

    // history.innerHTML += `<button value=${equ} class="history-item">${equ}</button>`;
    // history.scrollTo(0, history.scrollHeight)

    var postFix = new PostFix;

    postFix.EvaluatePostFix(pfixVal);
    var EquEvalRes: number | null | undefined = postFix.getResult();

    if (EquEvalRes != null || EquEvalRes != undefined) {
        return Number(EquEvalRes.toFixed(2));
    }
}


export { Evaluate }
