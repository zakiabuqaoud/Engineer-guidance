import axios from "axios";
import {
    GET_STUDENT_PROFILE_LOADING,
    GET_STUDENT_PROFILE_SUCCESS,
    GET_STUDENT_PROFILE_ERROR,
    GET_MY_PLANS_LOADING,
    GET_MY_PLANS_SUCCESS,
    GET_MY_PLANS_ERROR,
    GET_ONE_CUSTOM_PLAN_LOADING,
    GET_ONE_CUSTOM_PLAN_SUCCESS,
    GET_ONE_CUSTOM_PLAN_ERROR,
    GET_STUDENT_SUBJECTS_LOADING,
    GET_STUDENT_SUBJECTS_SUCCESS,
    GET_STUDENT_SUBJECTS_ERROR, GET_STUDENT_HELP_LOADING, GET_STUDENT_HELP_SUCCESS, GET_STUDENT_HELP_ERROR,
} from "./Student.type";

// get Student Profile Action
export const getStudentProfileAction = (studentId) => {
    return async (dispatch,getStore) => {
            const store = getStore();
            const token = store?.StudentReducer;
            const config ={
                headers :{
                    "content/type" : "application/json",
                    "authorization" : `Bearer ${token}`
            }
            }
        dispatch({
            type:GET_STUDENT_PROFILE_LOADING,
            payload:{isLoading:true}
        });
        try{//NotFound api
            const response = await axios.get(`http://localhost:8000/api/student-profile${studentId}`,config);
            //  console.log(response.data);
            localStorage.setItem("studentProfile",JSON.stringify(response.data))
            dispatch({
                type:GET_STUDENT_PROFILE_SUCCESS,
                payload:response.data
            });
        }catch (error){
            dispatch({
                type:GET_STUDENT_PROFILE_ERROR,
                payload:error.getMessage
            });
        }
    }
}

// get my plans action
export const getMyPlansAction = () => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.StudentReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type:GET_MY_PLANS_LOADING,
            payload:{isLoading:true}
        });
        try{//NotFound api
            const response = await axios.get(`http://localhost:8000/api/myplans`,config);
            //  console.log(response.data);
            localStorage.setItem("myPlans",JSON.stringify(response.data))
            dispatch({
                type:GET_MY_PLANS_SUCCESS,
                payload:response.data
            });
        }catch (error){
            dispatch({
                type:GET_MY_PLANS_ERROR,
                payload:error.getMessage
            });
        }
    }
}

//????????????????student id
//get one custom plan action
export const getOneCustomPlanAction = (customPlanId)=>{
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.StudentReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type:GET_ONE_CUSTOM_PLAN_LOADING,
            payload:{isLoading:true}
        });
        try{
            const response = await axios.get(`http://localhost:8000/api/customer-plan/${customPlanId}`,config);
            //  console.log(response.data);
            localStorage.setItem("oneCustomPlan",JSON.stringify(response.data))
            dispatch({
                type:GET_ONE_CUSTOM_PLAN_SUCCESS,
                payload:response.data
            });
        }catch (error){
            dispatch({
                type:GET_ONE_CUSTOM_PLAN_ERROR,
                payload:error.getMessage
            });
        }
    }
}

//
//get student subjects action

export const getStudentSubjectsAction = (studentId) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.StudentReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: GET_STUDENT_SUBJECTS_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.get(`http://localhost:8000/api/student/subjects/${studentId}`,config);
            //  console.log(response.data);
            localStorage.setItem("studentSubjects", JSON.stringify(response.data))
            dispatch({
                type: GET_STUDENT_SUBJECTS_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: GET_STUDENT_SUBJECTS_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//get student help action

export const getStudentHelpAction = () => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.StudentReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: GET_STUDENT_HELP_LOADING,
            payload: {isLoading: true}
        });
        try {// api not found
            const response = await axios.get(`http://localhost:8000/api/help`,config);
            //  console.log(response.data);
            localStorage.setItem("help", JSON.stringify(response.data))
            dispatch({
                type: GET_STUDENT_HELP_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: GET_STUDENT_HELP_ERROR,
                payload: error.getMessage
            });
        }
    }

    //
}


