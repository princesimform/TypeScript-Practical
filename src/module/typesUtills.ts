interface stackNodeType {
    item: null | number,
    next: null | number
}
interface currentType {
    item: number | null,
    next: number | null | stackNodeType
}

interface LinkedStackType {
    head: headType,
    size: null | number,
    pushToStack: Function,
    popFromStack: Function,
    isStackEmpty: Function,
    stackTop: Function,
    printStack: Function
}

type headType = null | stackNodeType | number;
export { stackNodeType , currentType , headType , LinkedStackType}