import { output, error } from "./Utils";
const errorMsg = (): void => {
    error.innerText = "Malformed expression";
    output.value = '';
    setTimeout(() => {
        error.innerText = '';
    }, 3000);
}

export default errorMsg