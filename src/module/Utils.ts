const output: HTMLInputElement = document.querySelector('#output')!;
const memory: HTMLSpanElement = document.querySelector('#memory')!;
const dot: HTMLButtonElement = document.querySelector('#point')!;
const error: HTMLDivElement = document.querySelector('#error')!;
const operators = document.querySelectorAll<HTMLButtonElement>('.operator')!;
const equationes = document.querySelectorAll<HTMLButtonElement>('.equation')!;
const operands = document.querySelectorAll<HTMLButtonElement>('.operand')!;
const secondCol: HTMLButtonElement = document.querySelector("#secondCol")!;
const DegReg: HTMLButtonElement = document.querySelector('#DegReg')!;
const plusMinus: HTMLButtonElement = document.querySelector('#plusMinus')!;
const FixedExpo: HTMLButtonElement = document.querySelector('#FixedExpo')!;
const clearAll: HTMLButtonElement = document.querySelector('#clearAll')!;
const clearOne: HTMLButtonElement = document.querySelector('#clearOne')!;
const mc: HTMLButtonElement = document.querySelector('#mc')!;
const mr: HTMLButtonElement = document.querySelector('#mr')!;
const mPlus: HTMLButtonElement = document.querySelector('#m-plus')!;
const mMinus: HTMLButtonElement = document.querySelector('#m-minus')!;
const ms: HTMLButtonElement = document.querySelector('#ms')!;
const func: HTMLButtonElement = document.querySelector('#func')!;
const funcList: HTMLDivElement = document.querySelector("#funcList")!;
const trigo: HTMLButtonElement = document.querySelector('#trigo')!;
const trigoList: HTMLDivElement = document.querySelector("#trigoList")!;
const funcListItem = document.querySelectorAll<HTMLButtonElement>(".func-list-item")!;
const trigoListItem = document.querySelectorAll<HTMLButtonElement>(".trigo-list-item")!;
const equalTo: HTMLButtonElement = document.querySelector('#equalTo')!;
const btnChange: HTMLCollection = document.getElementsByClassName('.btn-change')!
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