import { Credentials } from "../types";
import { api } from "./client";

// Sarye endpoints yahan list krein gye. Tu centeralized krdia agar future mein new endpoint aata hai yaa change hota hai hum ko code mein nhi ja k dhoonda yahan sye krlena change 

// Auth service 

/*credentials: Credentials mein email and password hai jo signup ki ui mein hai 
api.post req use kri and in our backend we have this endpoint /auth/login 
and lastly /auth/login mein mene credentials pass kra jis mein email and password hoga aur
uss ko hum endpoint /auth/login ki help sye  server p daal diye.
So, now we can use login function ;) aur post p hover kro it return promise u will see it*/
export const login = (credentials: Credentials) => api.post('/auth/login', credentials); 


