import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "./Auth.type";
import axios from "axios";

export const registerAction = (values,navigate)=>{
    return async (dispatch) => {
            dispatch({
                type:REGISTER_LOADING,
                payload:true
            })
        try{
                const response = await axios.post("http://localhost:8000/api/student",values);
                console.log(response.data);
                localStorage.setItem("student", JSON.stringify(response.data));
            dispatch({
                type:REGISTER_SUCCESS,
                payload:response.data
            })
            navigate?.();
        }catch (error){
            dispatch({
                type:REGISTER_ERROR,
                payload:error.getMessage
            })
        }
    }
}


export const loginAction = (values,navigate) => {
    return async (dispatch) => {
        dispatch({
            type:LOGIN_LOADING,
            payload:true
        })
        try{
            const response = await axios.post("http://localhost:8000/api/login",values);
            console.log(response.data);
            localStorage.setItem("student", JSON.stringify(response.data));

            dispatch({
                type:LOGIN_SUCCESS,
                payload:response.data
            })
            navigate?.();
        }catch (error){
            dispatch({
                type:LOGIN_ERROR,
                payload:error.getMessage
            })
        }
    }
}