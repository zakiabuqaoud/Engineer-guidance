import {
    CREATE_CUSTOM_PLAN_ERROR,
    CREATE_CUSTOM_PLAN_LOADING,
    CREATE_CUSTOM_PLAN_SUCCESS, DELETE_CUSTOM_PLAN_ERROR, DELETE_CUSTOM_PLAN_LOADING, DELETE_CUSTOM_PLAN_SUCCESS,
    GET_MY_PLANS_ERROR,
    GET_MY_PLANS_LOADING,
    GET_MY_PLANS_SUCCESS,
    GET_ONE_CUSTOM_PLAN_ERROR,
    GET_ONE_CUSTOM_PLAN_LOADING,
    GET_ONE_CUSTOM_PLAN_SUCCESS,
    GET_STUDENT_HELP_ERROR,
    GET_STUDENT_HELP_LOADING,
    GET_STUDENT_HELP_SUCCESS,
    GET_STUDENT_PROFILE_ERROR,
    GET_STUDENT_PROFILE_LOADING,
    GET_STUDENT_PROFILE_SUCCESS,
    GET_STUDENT_SUBJECTS_ERROR,
    GET_STUDENT_SUBJECTS_LOADING,
    GET_STUDENT_SUBJECTS_SUCCESS, UPDATE_CUSTOM_PLAN_ERROR,
    UPDATE_CUSTOM_PLAN_LOADING, UPDATE_CUSTOM_PLAN_SUCCESS
} from "./Student.type";

const StudentReducer = (state={
    studentProfile:{
        isLoading: false,
        error:"",
        data:{}
    },
    myPlans:{
        isLoading: false,
        error:"",
        data:{}
    },
    oneCustomPlan:{
        isLoading: false,
        error:"",
        data:{}
    },
    studentSubjects:{
        isLoading: false,
        error:"",
        data:{}
    },
    help:{
        isLoading: false,
        error:"",
        data:{}
    },
    CustomPlanProcess:{
        isLoading: false,
        error:"",
        data:{}
    },

},action)=>{
    switch (action.type){
        //GET_STUDENT_PROFILE
        case GET_STUDENT_PROFILE_LOADING:
            return {...state,studentProfile:{...state, isLoading:action.payload, error: ""}};//problem
        case GET_STUDENT_PROFILE_SUCCESS:
            return {...state,studentProfile:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case GET_STUDENT_PROFILE_ERROR:
            return {...state,studentProfile:{...state, isLoading:false, error: action.payload}};//problem

        //GET_MY_PLANS
        case GET_MY_PLANS_LOADING:
            return {...state,myPlans:{...state, isLoading:action.payload, error: ""}};//problem
        case GET_MY_PLANS_SUCCESS:
            return {...state,myPlans:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case GET_MY_PLANS_ERROR:
            return {...state,myPlans:{...state, isLoading:false, error: action.payload}};//problem

        //GET_ONE_CUSTOM_PLAN
        case GET_ONE_CUSTOM_PLAN_LOADING:
            return {...state,oneCustomPlan:{...state, isLoading:action.payload, error: ""}};//problem
        case GET_ONE_CUSTOM_PLAN_SUCCESS:
            return {...state,oneCustomPlan:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case GET_ONE_CUSTOM_PLAN_ERROR:
            return {...state,oneCustomPlan:{...state, isLoading:false, error: action.payload}};//problem

        //GET_STUDENT_SUBJECTS
        case GET_STUDENT_SUBJECTS_LOADING:
            return {...state,studentSubjects:{...state, isLoading:action.payload, error: ""}};//problem
        case GET_STUDENT_SUBJECTS_SUCCESS:
            return {...state,studentSubjects:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case GET_STUDENT_SUBJECTS_ERROR:
            return {...state,studentSubjects:{...state, isLoading:false, error: action.payload}};//problem

        //get help
        case GET_STUDENT_HELP_LOADING:
            return {...state,help:{...state, isLoading:action.payload, error: ""}};//problem
        case GET_STUDENT_HELP_SUCCESS:
            return {...state,help:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case GET_STUDENT_HELP_ERROR:
            return {...state,help:{...state, isLoading:false, error: action.payload}};//problem

        //create custom plan
        case CREATE_CUSTOM_PLAN_LOADING:
            return {...state,CustomPlanProcess:{...state, isLoading:action.payload, error: ""}};//problem
        case CREATE_CUSTOM_PLAN_SUCCESS:
            return {...state,CustomPlanProcess:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case CREATE_CUSTOM_PLAN_ERROR:
            return {...state,CustomPlanProcess:{...state, isLoading:false, error: action.payload}};//problem

        //update custom plan
        case UPDATE_CUSTOM_PLAN_LOADING:
            return {...state,CustomPlanProcess:{...state, isLoading:action.payload, error: ""}};//problem
        case UPDATE_CUSTOM_PLAN_SUCCESS:
            return {...state,CustomPlanProcess:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case UPDATE_CUSTOM_PLAN_ERROR:
            return {...state,CustomPlanProcess:{...state, isLoading:false, error: action.payload}};//problem

        //delete custom plan
        case DELETE_CUSTOM_PLAN_LOADING:
            return {...state,CustomPlanProcess:{...state, isLoading:action.payload, error: ""}};//problem
        case DELETE_CUSTOM_PLAN_SUCCESS:
            return {...state,CustomPlanProcess:{...state,data:action.payload, isLoading:false, error: ""}};//problem
        case DELETE_CUSTOM_PLAN_ERROR:
            return {...state,CustomPlanProcess:{...state, isLoading:false, error: action.payload}};//problem

        default:
            return {...state};
    }
}
export default StudentReducer;