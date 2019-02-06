import service from "./service";
export function setRoom(){
    //let getPromise = service.getData('http://localhost:6060/api');
    return {
        type: "SET_ROOM",
        payload:'hELLO',
    }
}