// import axios from "axios"
// import { API_BASE_URL } from "../../config/apiConfig"
// import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

// const token=localStorage.getItem("jwt");

// const registerRequest=()=>({type:REGISTER_REQUEST});
// const registerSuccess=(user)=>({type:REGISTER_SUCCESS, payload:user});
// const registerFailure=(error)=>({type:REGISTER_FAILURE, payload:error});

// export const register=(userData)=> async (dispatch)=>{
//     dispatch(registerRequest())
//     try {
//         const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
//         const user=response.data;
//         if(user.jwt){
//             localStorage.setItem("jwt", user.jwt)
//         }
//         console.log("user", user)
//         dispatch(registerSuccess(user.jwt))
//     } catch (error) {
//         dispatch(registerFailure(error.message))
//     }
// }

// const loginRequest=()=>({type:LOGIN_REQUEST});
// const loginSuccess=(user)=>({type:LOGIN_SUCCESS, payload:user});
// const loginFailure=(error)=>({type:LOGIN_FAILURE, payload:error});


// export const login=(userData)=> async (dispatch)=>{
//     dispatch(loginRequest())
//     try {
//         const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
//         const user=response.data;
//         if(user.jwt){
//             localStorage.setItem("jwt", user.jwt)
//         }
//         console.log("user", user)
//         dispatch(loginSuccess(user.jwt))
//     } catch (error) {
//         dispatch(loginFailure(error.message))
//     }
// }


// const getUserRequest=()=>({type:GET_USER_REQUEST});
// const getUserSuccess=(user)=>({type:GET_USER_SUCCESS, payload:user});
// const getUserFailure=(error)=>({type:GET_USER_FAILURE, payload:error});


// export const getUser=(jwt)=> async (dispatch)=>{
//     dispatch(getUserRequest())
//     try {
//         const response = await axios.get(`${API_BASE_URL}/users/profile`, {
//             headers:{
//                 "Authorization": `Bearer ${jwt}`
//             }
//         })
//         const user=response.data;
//         console.log("user", user)
        
//         dispatch(getUserSuccess(user))
//     } catch (error) {
//         dispatch(getUserFailure(error.message))
//     }
// }

// export const logout=()=>(dispatch)=>{
//     dispatch({type:LOGOUT, payload:null})
// }

import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";

// Action creators for register actions
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("Registered user:", user);
        dispatch(registerSuccess(user.jwt));
    } catch (error) {
        dispatch(registerFailure(error.message));
        console.error("Register error:", error);
    }
};

// Action creators for login actions
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("Logged in user:", user);
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
        console.error("Login error:", error);
    }
};

// Action creators for getting user profile actions
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest());
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
        console.error("JWT token not found in localStorage.");
        dispatch(getUserFailure("JWT token not found"));
        return;
    }

    console.log("Sending JWT token:", jwt); // Debug log for the token

    try {
        const response = await axios.get(`${API_BASE_URL}/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;
        console.log("Fetched user profile:", user);
        dispatch(getUserSuccess(user));
    } catch (error) {
        console.error("Error fetching user profile:", error);
        dispatch(getUserFailure(error.message));
    }
};

// Logout action
export const logout = () => (dispatch) => {
    localStorage.removeItem("jwt"); // Clear the token from localStorage on logout
    dispatch({ type: LOGOUT, payload: null });
};
