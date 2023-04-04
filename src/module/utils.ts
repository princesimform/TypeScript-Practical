const output = document.getElementById('output') as HTMLInputElement;
const memory = document.getElementById('memory') as HTMLSpanElement;
const dot = document.getElementById('point') as HTMLButtonElement;
const error = document.getElementById('error') as HTMLDivElement;
const operators = document.getElementsByClassName('operator') as HTMLCollection;
const equationes = document.getElementsByClassName('equation') as HTMLCollection;
const operands = document.getElementsByClassName('operand') as HTMLCollection;
const secondCol = document.getElementById("secondCol") as HTMLButtonElement;
const DegReg = document.getElementById('DegReg') as HTMLButtonElement;
const plusMinus = document.getElementById('plusMinus') as HTMLButtonElement;
const FixedExpo = document.getElementById('FixedExpo') as HTMLButtonElement;
const clearAll = document.getElementById('clearAll') as HTMLButtonElement;
const clearOne = document.getElementById('clearOne') as HTMLButtonElement;
const mc = document.getElementById('mc') as HTMLButtonElement;
const mr = document.getElementById('mr') as HTMLButtonElement;
const mPlus = document.getElementById('m-plus') as HTMLButtonElement;
const mMinus = document.getElementById('m-minus') as HTMLButtonElement;
const ms = document.getElementById('ms') as HTMLButtonElement;
const func = document.getElementById('func') as HTMLButtonElement;
const funcList = document.getElementById("funcList") as HTMLDivElement;
const trigo = document.getElementById('trigo') as HTMLButtonElement;
const trigoList = document.getElementById("trigoList") as HTMLDivElement;
const funcListItem = document.getElementsByClassName("func-list-item") as HTMLCollection;
const trigoListItem = document.getElementsByClassName("trigo-list-item") as HTMLCollection;
const equalTo = document.getElementById('equalTo') as HTMLButtonElement;
const btnChange = document.getElementsByClassName('btn-change') as HTMLCollection
export {
    output,
    memory,
    dot,
    error,
    operators,
    equationes,
    operands,
    secondCol,
    DegReg,
    plusMinus,
    FixedExpo,
    clearAll,
    clearOne,
    mc,
    mr,
    mMinus,
    mPlus,
    ms,
    func,
    funcList,
    trigo,
    trigoList,
    funcListItem,
    trigoListItem,
    equalTo,
    btnChange
}