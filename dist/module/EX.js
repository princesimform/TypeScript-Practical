class stackNode {
    constructor() {
        this.item = null;
        this.next = null;
    }
}
class LinkedStack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    pushToStack(item) {
        var node = new stackNode();
        node.item = item;
        node.next = null;
        if (this.size < 1 && this.head === null) {
            this.head = node;
            this.head.next = null;
            this.size = 1;
        }
        else {
            if (this.head != null && typeof this.head != "number") {
                var current = this.head;
                while (current.next != null) {
                    if (typeof current.next == 'object') {
                        current = current.next;
                    }
                }
                current.next = node;
            }
            this.size += 1;
        }
    }
    popFromStack() {
        if (this.head != null && typeof this.head != "number") {
            var current = this.head;
            if (this.size === 0) {
                return;
            }
            if (this.size === 1) {
                this.head = null;
                this.size = 0;
                return current;
            }
            var prev = current;
            while (current.next != null) {
                prev = current;
                if (typeof current.next == 'object') {
                    current = current.next;
                }
            }
            prev.next = null;
            this.size -= 1;
            return current;
        }
    }
    isStackEmpty() {
        return (this.size < 1) ? true : false;
    }
    stackTop() {
        if (this.head != null && typeof this.head != "number") {
            var current = this.head;
            if (this.size > 0 && this.head != null) {
                while (current.next != null) {
                    if (typeof current.next == 'object') {
                        current = current.next;
                    }
                }
                return current.item;
            }
            else {
                return null;
            }
        }
    }
    printStack() {
        if (this.head != null && typeof this.head != "number") {
            var current = this.head;
            while (current.next !== null) {
                if (typeof current.next == 'object') {
                    current = current.next;
                }
            }
        }
    }
}
// Implementation of Stack for Evaluation
// Define Stack Opration
// InFix to PostFix Convernsion
// Evaluate PostFix and Get Answer
class InfixToPostfix {
    constructor() {
        this.precedence = function (operator) {
            switch (operator) {
                case "log":
                    return 4;
                case "^":
                    return 3;
                case "*":
                    return 2;
                case "√":
                    return 3;
                case "/":
                    return 2;
                case "%":
                    return 2;
                case "+":
                    return 1;
                case "-":
                    return 1;
                default:
                    return 0;
            }
        };
        this.stk = [];
        this.stk.push('#');
        this.pfixNumber = [];
    }
    convertInfixToPostFix(exp) {
        for (var i = 0; i < exp.length; i++) {
            var c = exp.charAt(i);
            let log = exp.substring(i, i + 3);
            if (!isNaN(parseInt(c)) || c == "." || (i == 0 && (exp[i] == "+" || exp[i] == "-"))) {
                var val = c;
                for (var j = i + 1; j < exp.length; j++) {
                    if (!isNaN(Number(exp.charAt(j))) || exp.charAt(j) == ".") {
                        val += exp.charAt(j);
                        i++;
                    }
                    else {
                        break;
                    }
                }
                this.pfixNumber.push(val);
            }
            else if (log == "log") {
                this.stk.push('log');
                i = i + 2;
            }
            else if (c == "(") {
                this.stk.push("(");
            }
            else if (c == ")") {
                while (this.stk[this.stk.length - 1] != "#" && this.stk[this.stk.length - 1] != '(') {
                    var popStr = this.stk.pop();
                    this.pfixNumber.push(String(popStr));
                }
                this.stk.pop();
            }
            else {
                if (this.precedence(c) > this.precedence(this.stk[this.stk.length - 1])) {
                    this.stk.push(c);
                }
                else {
                    while (this.stk[this.stk.length - 1] != '#' && this.precedence(c) <= this.precedence(this.stk[this.stk.length - 1])) {
                        this.pfixNumber.push(String(this.stk.pop()));
                    }
                    this.stk.push(c);
                }
            }
        }
        while (this.stk[this.stk.length - 1] != '#') {
            this.pfixNumber.push(String(this.stk.pop()));
        }
    }
    getPostfix() {
        return this.pfixNumber;
    }
}
class PostFix {
    constructor() {
        this.numStack = new LinkedStack;
    }
    operate(obj, operator) {
        var operand2 = obj.popFromStack(obj.head).item;
        var operand1 = obj.popFromStack().item;
        switch (operator) {
            case "+":
                obj.pushToStack(operand1 + operand2);
                break;
            case "-":
                obj.pushToStack(operand1 - operand2);
                break;
            case "*":
                obj.pushToStack(operand1 * operand2);
                break;
            case "%":
                obj.pushToStack(operand1 % operand2);
                break;
            case "/":
                obj.pushToStack(operand1 / operand2);
                break;
            case "^":
                obj.pushToStack(Math.pow(operand1, operand2));
                break;
            case "√":
                let operand3 = 1 / operand1;
                obj.pushToStack(Math.pow(operand2, operand3));
                break;
            case "log":
                obj.pushToStack(Math.log(operand1) / Math.log(operand2));
                break;
        }
    }
    EvaluatePostFix(exp) {
        for (var i = 0; i < exp.length; i++) {
            let c = exp[i];
            if (!isNaN(parseInt(c))) {
                this.numStack.pushToStack(parseFloat(c));
            }
            else if (c === '+' || c === '-' || c === '*' || c === '/' || c === '^' || c === '%' || c == 'log' || c === '√') {
                this.operate(this.numStack, c);
            }
        }
    }
    getResult() {
        return this.numStack.stackTop();
    }
}
export { LinkedStack, stackNode, InfixToPostfix, PostFix };
