import {combineReducers} from "redux";
import allRoomsReducer from "./roomsreducer";


let rootReducer = combineReducers({
    allRooms:allRoomsReducer,
    
});
export default rootReducer;
