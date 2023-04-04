import { InfixToPostfix, PostFix } from "./EX.js";
function Evaluate(equ) {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal = infixToPostfix.getPostfix();
    // history.innerHTML += `<button value=${equ} class="history-item">${equ}</button>`;
    // history.scrollTo(0, history.scrollHeight)
    var postFix = new PostFix;
    postFix.EvaluatePostFix(pfixVal);
    var EquEvalRes = postFix.getResult();
    if (EquEvalRes != null || EquEvalRes != undefined) {
        return Number(EquEvalRes.toFixed(2));
    }
}
export { Evaluate };
