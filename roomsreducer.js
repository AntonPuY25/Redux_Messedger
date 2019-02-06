export default function(state=null,action){
    switch(action.type){
        case "SET_ROOM":
        return action.payload;
    }
    return state;
}