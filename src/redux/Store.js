import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {UserReducer} from "./User/User.reducer";
import {AuthReducer} from "./Auth/Auth.reducer";

// 1 : Reducers
const reducers = combineReducers({
    UserReducer,
    AuthReducer
    });

// 2 : localStorage to provide initial State
const subjectsLocalStorage = JSON.parse(localStorage.getItem("subjects")) || {};
const oneSubjectLocalStorage = JSON.parse(localStorage.getItem("oneSubject")) || {};
const oneMajorLocalStorage = JSON.parse(localStorage.getItem("oneMajor")) || {};
const initialState = {
    UserReducer:{
        subjects: subjectsLocalStorage,
        oneSubject: oneSubjectLocalStorage,
        oneMajor:oneMajorLocalStorage
    }
}

// 3 : middleware
const middleWare = [thunk]; //problem

// create Store include 1,2,3
const Store = createStore(
    reducers,// 1
    initialState,// 2
    compose(
        applyMiddleware(...middleWare) // 3
    )
);

export default Store;