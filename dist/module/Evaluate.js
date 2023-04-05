import { InfixToPostfix, PostFix } from "./EX.js";
function Evaluate(equ) {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal = infixToPostfix.getPostfix();
    var postFix = new PostFix;
    postFix.EvaluatePostFix(pfixVal);
    var EquEvalRes = postFix.getResult();
    if (EquEvalRes != null || EquEvalRes != undefined) {
        return Number(EquEvalRes.toFixed(2));
    }
}
export { Evaluate };
