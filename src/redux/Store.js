import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {UserReducer} from "./User/User.reducer";
import {AuthReducer} from "./Auth/Auth.reducer";
import StudentReducer from "./Student/Student.reducer";
import AdminReducer from "./Admin/Admin.reducer"

// 1 : Reducers
const reducers = combineReducers({
    UserReducer,
    AuthReducer,
    StudentReducer,
    AdminReducer,
    });

// 2 : localStorage to provide initial State
//user
const subjectsLocalStorage = JSON.parse(localStorage.getItem("subjects")) || {};
const oneSubjectLocalStorage = JSON.parse(localStorage.getItem("oneSubject")) || {};
const oneMajorLocalStorage = JSON.parse(localStorage.getItem("oneMajor")) || {};
const subSubjectLocalStorage = JSON.parse(localStorage.getItem("subSubject")) || {};
const subMajorsLocalStorage = JSON.parse(localStorage.getItem("subMajors")) || {};
const oneSubMajorLocalStorage = JSON.parse(localStorage.getItem("oneSubMajor")) || {};
const oneSubSubjectLocalStorage = JSON.parse(localStorage.getItem("oneSubSubject")) || {};

//auth
const studentDetailsLocalStorage = JSON.parse(localStorage.getItem("student")) || {};
//student

//admin



const initialState = {
    UserReducer:{
        subjects: subjectsLocalStorage,
        oneSubject: oneSubjectLocalStorage,
        oneMajor:oneMajorLocalStorage,
        subSubject:subSubjectLocalStorage,
        subMajors:subMajorsLocalStorage,
        oneSubMajor:oneSubMajorLocalStorage,
        oneSubSubject:oneSubSubjectLocalStorage
    },
    AuthReducer:{
        student: studentDetailsLocalStorage,
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