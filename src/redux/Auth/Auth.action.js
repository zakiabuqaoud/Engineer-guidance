import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "./Auth.type";
import axios from "axios";


export const registerAction = (values)=>{
    return async (dispatch) => {
            dispatch({
                type:REGISTER_LOADING,
                payload:true
            })
        try{
                const response = await axios.post("",values);
                console.log(response.data);
             //   localStorage.setItem("register",response.data);
            dispatch({
                type:REGISTER_SUCCESS,
                payload:response.data
            })
        }catch (error){
            dispatch({
                type:REGISTER_ERROR,
                payload:error.getMessage
            })
        }
    }
}


export const loginAction = (values) => {
    return async (dispatch) => {
        dispatch({
            type:LOGIN_LOADING,
            payload:true
        })
        try{
            const response = await axios.post("",values);
            console.log(response.data);
            //localStorage.setItem("login",response.data);

            dispatch({
                type:LOGIN_SUCCESS,
                payload:response.data
            })
        }catch (error){
            dispatch({
                type:LOGIN_ERROR,
                payload:error.getMessage
            })
        }
    }
}