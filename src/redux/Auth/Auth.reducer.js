import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "./Auth.type";


export const AuthReducer = (state = {
    authRegister:{
        isLoading: false,
        error:"",
        data:{}
    },
   authLogin:{
       isLoading: false,
       error:"",
       data:{}
   },
},action) =>{
    switch(action.type){
        // register action
        case REGISTER_LOADING:
            return {...state,authRegister: {...state, isLoading:action.payload, error:""}}
        case REGISTER_SUCCESS:
            return {...state,authRegister: {...state, data:action.payload, isLoading:false, error:""}}
        case REGISTER_ERROR:
            return {...state,authRegister: {...state, isLoading:false, error:action.payload}}

        // login action
        case LOGIN_LOADING:
            return {...state,authLogin: {...state, isLoading:action.payload, error:""}}
        case LOGIN_SUCCESS:
            return {...state,authLogin: {...state, data:action.payload, isLoading:false, error:""}}
        case LOGIN_ERROR:
            return {...state,authLogin: {...state, isLoading:false, error:action.payload}}

        default:
            return state;
    }

}