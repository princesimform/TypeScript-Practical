import errorMsg from "./ErrorMessage.js";
import { InfixToPostfix, PostFix } from "./EX.js";
function Evaluate(equ) {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal = infixToPostfix.getPostfix();
    var postFix = new PostFix;
    try {
        postFix.EvaluatePostFix(pfixVal);
    }
    catch (error) {
        errorMsg();
        throw new Error("Not Valid String");
    }
    try {
        var EquEvalRes = postFix.getResult();
        if (EquEvalRes != null || EquEvalRes != undefined) {
            return Number(EquEvalRes.toFixed(2));
        }
        else {
        }
    }
    catch (_a) {
        throw new Error("");
        errorMsg();
    }
    return;
}
export { Evaluate };
