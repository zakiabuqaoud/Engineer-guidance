import axios from "axios";
import {
    CREATE_SUB_MAJOR_ERROR,
    CREATE_SUB_MAJOR_LOADING,
    CREATE_SUB_MAJOR_SUCCESS,
    CREATE_SUB_SUBJECT_ERROR,
    CREATE_SUB_SUBJECT_LOADING,
    CREATE_SUB_SUBJECT_SUCCESS,
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
    UPDATE_SUB_MAJOR_SUCCESS,
    UPDATE_SUB_SUBJECT_ERROR,
    UPDATE_SUB_SUBJECT_LOADING,
    UPDATE_SUB_SUBJECT_SUCCESS,
    UPDATE_SUBJECT_ERROR,
    UPDATE_SUBJECT_LOADING,
    UPDATE_SUBJECT_SUCCESS
} from "./Admin.type";
// #################################subject##############################################333
//create subject
export const createSubjectAction = (values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: CREATE_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.post(`http://localhost:8000/api/subject`,values,config);
            dispatch({
                type: CREATE_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: CREATE_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//update subject
export const updateSubjectAction = (subjectID,values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: UPDATE_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.put(`http://localhost:8000/api/subject/${subjectID}`,values,config);
            dispatch({
                type: UPDATE_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//delete subject
export const deleteSubjectAction = (subjectID) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: DELETE_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.delete(`http://localhost:8000/api/subject${subjectID}`,config);
            dispatch({
                type: DELETE_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: DELETE_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}
// #######################################sub major##########################################

//create subMajor
export const createSubMajorAction = (values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: CREATE_SUB_MAJOR_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.post(`http://localhost:8000/api/sub-major`,values,config);
            dispatch({
                type: CREATE_SUB_MAJOR_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: CREATE_SUB_MAJOR_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//update subMajor
export const updateSubMajorAction = (subMajorID,values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: UPDATE_SUB_MAJOR_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.put(`http://localhost:8000/api/sub-major${subMajorID}`,values,config);
            dispatch({
                type: UPDATE_SUB_MAJOR_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_SUB_MAJOR_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//delete subMajor
export const deleteSubMajorAction = (subMajorId) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: DELETE_SUB_MAJOR_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.delete(`http://localhost:8000/api/sub-major/${subMajorId}`,config);
            dispatch({
                type: DELETE_SUB_MAJOR_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: DELETE_SUB_MAJOR_ERROR,
                payload: error.getMessage
            });
        }
    }
}
// #################### SubSubject  ############################

//createSubSubjectAction
export const createSubSubjectAction = (values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: CREATE_SUB_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.post(`http://localhost:8000/api/sub-subject`,values,config);
            dispatch({
                type: CREATE_SUB_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: CREATE_SUB_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//update subSubject
export const updateSubSubjectAction = (subSubjectID,values) => {
    return async (dispatch,getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config ={
            headers :{
                "content/type" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        }
        dispatch({
            type: UPDATE_SUB_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.put(`http://localhost:8000/api/sub-subject${subSubjectID}`,values,config);
            dispatch({
                type: UPDATE_SUB_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_SUB_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}

//delete sub-subject
export const deleteSubSubjectAction = (subSubjectId) => {
    return async (dispatch, getStore) => {
        const store = getStore();
        const token = store?.AdminReducer;
        const config = {
            headers: {
                "content/type": "application/json",
                "authorization": `Bearer ${token}`
            }
        }
        dispatch({
            type: DELETE_SUB_SUBJECT_LOADING,
            payload: {isLoading: true}
        });
        try {
            const response = await axios.delete(`http://localhost:8000/api/sub-subject/${subSubjectId}`, config);
            dispatch({
                type: DELETE_SUB_SUBJECT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: DELETE_SUB_SUBJECT_ERROR,
                payload: error.getMessage
            });
        }
    }
}