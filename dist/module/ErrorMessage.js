import { output, error } from "./Utils.js";
const errorMsg = () => {
    error.innerText = "Malformed expression";
    output.value = '';
    setTimeout(() => {
        error.innerText = '';
    }, 3000);
};
export default errorMsg;
