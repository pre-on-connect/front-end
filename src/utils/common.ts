export function validationAlert(result:boolean, message:string){
    if(!result){
        alert(message);
    }
    return result;
}