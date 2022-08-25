import axios from "axios";
import {
    GET_SUBJECTS_LOADING,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_ERROR,
    GET_ONE_SUBJECT_LOADING,
    GET_ONE_SUBJECT_SUCCESS, GET_ONE_SUBJECT_ERROR, GET_ONE_MAJOR_LOADING, GET_ONE_MAJOR_ERROR, GET_ONE_MAJOR_SUCCESS
} from "./User.type";

//Get all subject Mec and SW
export const getSubjectsAction = () => {
    return async (dispatch) => {

            dispatch({
                type:GET_SUBJECTS_LOADING,
                payload:{isLoading:true}
            });
        try{
            const response = await axios.get("http://localhost:8000/api/subject");
          //  console.log(response.data);
            localStorage.setItem("subjects",JSON.stringify(response.data))
            dispatch({
                type:GET_SUBJECTS_SUCCESS,
                payload:response.data
            });
        }catch (error){
            dispatch({
                type:GET_SUBJECTS_ERROR,
                payload:error.getMessage
            });
        }
    }
}

//Get one Major Action
export const getOneMajorAction = (id)=>{
    return async (dispatch) => {

            dispatch({
                type: GET_ONE_MAJOR_LOADING,
                payload: {isLoading: true}
            });
            try{
            const response = await axios.get(`http://localhost:8000/api/department/${id}`);
            //localStorage
            localStorage.setItem("oneMajor",JSON.stringify(response.data));
            dispatch({
                type:GET_ONE_MAJOR_SUCCESS,
                payload:response.data
            });
        }catch (error){
            dispatch({
               type:GET_ONE_MAJOR_ERROR,
               payload:error.getMessage
            });
        }
    }
}

//Get one Subject Action
export const getOneSubjectAction = (id)=> {
    return async (dispatch) => {

            dispatch({
                type: GET_ONE_SUBJECT_LOADING,
                payload: {isLoading: true}
            });
        try {
            const response = await axios.get(`http://localhost:8000/api/subject/${id}`);
          //  console.log("one product response ", response.data);
            //localStorege
            localStorage.setItem("oneSubject",JSON.stringify(response.data));
            //
            dispatch({
                type:GET_ONE_SUBJECT_SUCCESS,
                payload:response.data
            });

        } catch (error) {
            dispatch({
                type:GET_ONE_SUBJECT_ERROR,
                payload:error.getMessage
            });
        }
    }
}