import axios from "axios";
import config from "../../config";

export const apiBaseUrl = config.API_BASE_URL

const userLoginEnpoint = `${apiBaseUrl}/users/login`
const userRegisterEndpoint = `${apiBaseUrl}/users/signup`

const getResturantsEndpoint = `${apiBaseUrl}/resturants`

const getResturantsByIDEndpoint = (id:string) => `${apiBaseUrl}/resturants/${id}`
const getResturantsByCategoryEndpoint = (category:string) => `${apiBaseUrl}/resturants/${category}`


const apiCall = async (method:string, endpoint: string, data?: string|object)=>{
    const options = {
        method: `${method}`,
        url: endpoint,
        data: data ? data: {}
    };
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        throw new Error();
    }
}

export const userLogin = (userDetails:{email:string,password:string}) =>{
    return apiCall('POST',userLoginEnpoint,userDetails)
}

export const userRegister = (userDetails:{email:string,password:string,phoneNumber:string,userName:string}) =>{
    return apiCall('POST',userRegisterEndpoint,userDetails)
}

export const fetchResturants=()=>{
    return apiCall('GET',getResturantsEndpoint)
}

export const fetchResturantsByID=(id:string)=>{
    return apiCall('GET',getResturantsByIDEndpoint(id))
}

export const fetchResturantsByCategory=(category:string)=>{
    return apiCall('GET',getResturantsByCategoryEndpoint(category))
}