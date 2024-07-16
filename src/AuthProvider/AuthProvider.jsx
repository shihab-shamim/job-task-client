import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext=createContext(null)


// useEffect(()=>{
//     const   unSubscibe= onAuthStateChanged(auth,currentUser=>{
//        setUser(currentUser)
//        if(currentUser){
//            // get token  and store client side 
//            const userInfo = {email: currentUser.email};
//            axiosPublic.post('/jwt',userInfo)
//            .then(res=>{
//                if(res.data.token){
//                    localStorage.setItem('access-token',res.data.token)
//        setLoading(false)
                   
//                }
//            })


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        if(user){
            const userInfo ={email:user.email}
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                    setLoading(false)
                    localStorage.setItem('user', JSON.stringify(user));
                }
            })
            
            
        }
    },[user,axiosPublic])
    const authInfo ={
        user,setUser,loading,setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        
    </AuthContext.Provider>
    );
};

export default AuthProvider;