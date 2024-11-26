import { createContext, useContext, useEffect, useState } from "react";
 
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [token, settoken] = useState(localStorage.getItem("token"));
const [user, setUser] = useState("");
const [isLoading,setIsLoading] = useState(true);
const [services, setServices] = useState([]);
const authorizationToken = `Bearer ${token}`;

const storetokenInLS = (serverToken) => {
    settoken(serverToken);
return localStorage.setItem("token",serverToken)
};
    
let isLoggedIn = !!token;
console.log("isLoggedin", isLoggedIn)
// Tracking the logout functionality

const LogoutUser = () => {
settoken("");
return localStorage.removeItem("token")
};


// jwt authentication to get currently logged in data 
const URL = "http://localhost:5000/api/auth/user";
const userAuthentocation = async() =>{
try {
    setIsLoading(true);
    const response = await fetch(URL,{
        method: "GET",
        headers: {
            Authorization: authorizationToken,
        }
    });

    if(response.ok){
        const data = await response.json();
        console.log("user data", data.usertData)
        setUser(data.userData);
        setIsLoading(false);
    }else{
        setIsLoading(false);
    }

} catch (error) {
    console.error("Error fetching user data",error)
}
}
// to fetch data from server 

const getServices = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/data/service",{
            method:"GET",
        });
        if(response.ok){
            const data = await response.json();
            console.log(data.message);
            setServices(data.message);
        }
        // console.log("services",response);
    } catch (error) {
        console.log(`services frontend error: ${error}`);
    }
};


useEffect(()=>{
    getServices();
    userAuthentocation();
},[]);

    return (<AuthContext.Provider value={{isLoggedIn, storetokenInLS, LogoutUser, user, services, authorizationToken,isLoading, }}>
        {children}
    </AuthContext.Provider>);
};

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
       throw new Error("useAuth used outside of the Provider"); 
    }
    return authContextValue;
}



