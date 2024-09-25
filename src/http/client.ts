// Axios kaa instance yahan p banaein gye 
import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL, // look we are reading evironment variables from .env this way  
    
    withCredentials: true, // humara token cookie mein aayegaa tu yhe lazmi hai use krna. Agar true nhi krogye tu cookies browser and request mein store nhi hongi 


    headers: {// har request mein yhe header add hojaein
        'Content-Type': 'application/json', // data sent hoga in json format 
        Accept: 'application/json', // yhe batye gaa server ko k client json format mein data accept kryegaa
    } 
})