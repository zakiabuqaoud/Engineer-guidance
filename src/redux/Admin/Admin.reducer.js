import {
    CREATE_SUB_MAJOR_ERROR,
    CREATE_SUB_MAJOR_LOADING,
    CREATE_SUB_MAJOR_SUCCESS, CREATE_SUB_SUBJECT_ERROR,
    CREATE_SUB_SUBJECT_LOADING, CREATE_SUB_SUBJECT_SUCCESS,
    CREATE_SUBJECT_ERROR,
    CREATE_SUBJECT_LOADING,
    CREATE_SUBJECT_SUCCESS,
    DELETE_SUB_MAJOR_ERROR,
    DELETE_SUB_MAJOR_LOADING,
    DELETE_SUB_MAJOR_SUCCESS, DELETE_SUB_SUBJECT_ERROR, DELETE_SUB_SUBJECT_LOADING, DELETE_SUB_SUBJECT_SUCCESS,
    DELETE_SUBJECT_ERROR,
    DELETE_SUBJECT_LOADING,
    DELETE_SUBJECT_SUCCESS,
    UPDATE_SUB_MAJOR_ERROR,
    UPDATE_SUB_MAJOR_LOADING,
    UPDATE_SUB_MAJOR_SUCCESS, UPDATE_SUB_SUBJECT_ERROR, UPDATE_SUB_SUBJECT_LOADING, UPDATE_SUB_SUBJECT_SUCCESS,
    UPDATE_SUBJECT_ERROR,
    UPDATE_SUBJECT_LOADING,
    UPDATE_SUBJECT_SUCCESS
} from "./Admin.type";

const AdminReducer =(state={
    subMajor:{
        isLoading: false,
        error:"",
        data:{}
    },
    subject:{
        isLoading: false,
        error:"",
        data:{}
    },
    subSubject:{
        isLoading: false,
        error:"",
        data:{}
    }
},action)=>{
switch (action.type){
    // #################sub major##################
    //create sub major
    case CREATE_SUB_MAJOR_LOADING:
        return {...state,subMajor:{...state, isLoading:action.payload, error: ""}};//problem
    case CREATE_SUB_MAJOR_SUCCESS:
        return {...state,subMajor:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case CREATE_SUB_MAJOR_ERROR:
        return {...state,subMajor:{...state, isLoading:false, error: action.payload}};//problem

    //update sub major
    case UPDATE_SUB_MAJOR_LOADING:
        return {...state,subMajor:{...state, isLoading:action.payload, error: ""}};//problem
    case UPDATE_SUB_MAJOR_SUCCESS:
        return {...state,subMajor:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case UPDATE_SUB_MAJOR_ERROR:
        return {...state,subMajor:{...state, isLoading:false, error: action.payload}};//problem

    //delete sub major
    case DELETE_SUB_MAJOR_LOADING:
        return {...state,subMajor:{...state, isLoading:action.payload, error: ""}};//problem
    case DELETE_SUB_MAJOR_SUCCESS:
        return {...state,subMajor:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case DELETE_SUB_MAJOR_ERROR:
        return {...state,subMajor:{...state, isLoading:false, error: action.payload}};//problem

    // #################subject##################

    //create subject
    case CREATE_SUBJECT_LOADING:
        return {...state,subject:{...state, isLoading:action.payload, error: ""}};//problem
    case CREATE_SUBJECT_SUCCESS:
        return {...state,subject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case CREATE_SUBJECT_ERROR:
        return {...state,subject:{...state, isLoading:false, error: action.payload}};//problem

    //update subject
    case UPDATE_SUBJECT_LOADING:
        return {...state,subject:{...state, isLoading:action.payload, error: ""}};//problem
    case UPDATE_SUBJECT_SUCCESS:
        return {...state,subject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case UPDATE_SUBJECT_ERROR:
        return {...state,subject:{...state, isLoading:false, error: action.payload}};//problem

    //delete subject
    case DELETE_SUBJECT_LOADING:
        return {...state,subject:{...state, isLoading:action.payload, error: ""}};//problem
    case DELETE_SUBJECT_SUCCESS:
        return {...state,subject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case DELETE_SUBJECT_ERROR:
        return {...state,subject:{...state, isLoading:false, error: action.payload}};//problem

// #################sub subject##################
    //create sub subject
    case CREATE_SUB_SUBJECT_LOADING:
        return {...state,subSubject:{...state, isLoading:action.payload, error: ""}};//problem
    case CREATE_SUB_SUBJECT_SUCCESS:
        return {...state,subSubject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case CREATE_SUB_SUBJECT_ERROR:
        return {...state,subSubject:{...state, isLoading:false, error: action.payload}};//problem

    //update sub subject
    case UPDATE_SUB_SUBJECT_LOADING:
        return {...state,subSubject:{...state, isLoading:action.payload, error: ""}};//problem
    case UPDATE_SUB_SUBJECT_SUCCESS:
        return {...state,subSubject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case UPDATE_SUB_SUBJECT_ERROR:
        return {...state,subSubject:{...state, isLoading:false, error: action.payload}};//problem

    //delete sub subject
    case DELETE_SUB_SUBJECT_LOADING:
        return {...state,subSubject:{...state, isLoading:action.payload, error: ""}};//problem
    case DELETE_SUB_SUBJECT_SUCCESS:
        return {...state,subSubject:{...state,data:action.payload, isLoading:false, error: ""}};//problem
    case DELETE_SUB_SUBJECT_ERROR:
        return {...state,subSubject:{...state, isLoading:false, error: action.payload}};//problem

    default:
        return {...state};
}
}
export default AdminReducer;