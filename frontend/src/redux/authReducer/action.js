import axios from 'axios'
import { BASE_URL } from '../../constants/Baseurl'
import { LOGIN_SUCCESS } from './types'
export const registerAction=(formData)=>{
    return axios.post(`${BASE_URL}/register`,formData)
    .then((res)=>res)
    .catch((err)=>err)
}

export const loginAction=(formData)=>(dispatch)=>{
     axios.post(`${BASE_URL}/register`,formData)
     .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
}