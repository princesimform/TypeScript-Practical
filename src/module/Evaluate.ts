import { InfixToPostfix, PostFix } from "./EX.js";
function Evaluate(equ: string): number | undefined {
    var infixToPostfix = new InfixToPostfix;
    infixToPostfix.convertInfixToPostFix(equ);
    var pfixVal: Array<string> = infixToPostfix.getPostfix();
    var postFix = new PostFix;
    postFix.EvaluatePostFix(pfixVal);
    var EquEvalRes: number | null | undefined = postFix.getResult();
    if (EquEvalRes != null || EquEvalRes != undefined) {
        return Number(EquEvalRes.toFixed(2));
    }
}


export { Evaluate }
