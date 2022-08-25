import {
    GET_ONE_MAJOR_ERROR,
    GET_ONE_MAJOR_LOADING, GET_ONE_MAJOR_SUCCESS,
    GET_ONE_SUBJECT_ERROR,
    GET_ONE_SUBJECT_LOADING,
    GET_ONE_SUBJECT_SUCCESS,
    GET_SUBJECTS_ERROR,
    GET_SUBJECTS_LOADING,
    GET_SUBJECTS_SUCCESS
} from "./User.type";


export const UserReducer =(state= {
    subjects:{
        isLoading: false,
        error:"",
        data:{}
    },
    oneSubject:{
        isLoading: false,
        error:"",
        data:{}
    },
    oneMajor:{
        isLoading: false,
        error:"",
        data:{}
    }
},action)=>{
switch (action.type){
    //get subjects
    case GET_SUBJECTS_LOADING:
        return {...state,subjects:{...state, isLoading:action.payload, error: ""}};//problem
    case GET_SUBJECTS_SUCCESS:
        return {...state,subjects:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case GET_SUBJECTS_ERROR:
        return {...state,subjects:{...state, isLoading:false, error: action.payload}};//problem

    //get one subject
    case GET_ONE_SUBJECT_LOADING:
        return {...state,oneSubject:{...state, isLoading:action.payload, error: ""}};
    case GET_ONE_SUBJECT_SUCCESS:
        return {...state,oneSubject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case GET_ONE_SUBJECT_ERROR:
        return {...state,oneSubject:{...state, isLoading:false, error: action.payload}};//problem

        //get one major
    case GET_ONE_MAJOR_LOADING:
        return {...state,oneMajor:{...state, isLoading:action.payload, error: ""}};
    case GET_ONE_MAJOR_SUCCESS:
        return {...state,oneMajor:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case GET_ONE_MAJOR_ERROR:
        return {...state,oneMajor:{...state, isLoading:false, error: action.payload}};//problem

    default:
        return {...state};//problem
}
}