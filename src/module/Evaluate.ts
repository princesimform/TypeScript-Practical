import errorMsg from "./ErrorMessage.js";
import { InfixToPostfix, PostFix } from "./EX.js";
function Evaluate(equ: string): number | undefined {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal: Array<string> = infixToPostfix.getPostfix();

    var postFix = new PostFix;
    try {
        postFix.EvaluatePostFix(pfixVal);

    } catch (error) {
        errorMsg();
        throw new Error("Not Valid String");
    }

    try {
        var EquEvalRes: number | void | undefined = postFix.getResult();
        if (EquEvalRes != null || EquEvalRes != undefined) {
            return Number(EquEvalRes.toFixed(2));
        }
        else {
        }
    } catch {
        throw new Error("");
        errorMsg();
    }

    return;

}


export { Evaluate }
