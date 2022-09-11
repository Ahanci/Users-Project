import React, {useState} from "react";
const AuthContext=React.createContext({
    token:'',
    isLoggedIn: false,
    login: (token)=>{},
    logOut: ()=>{}
});


export const AuthContextProvider= (props)=>{
    const initialToken= localStorage.getItem('token');
    const[token, setToken]=useState(initialToken);

    const userIsLoggedIn= !!token;

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');

    }

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token', token);
        
        setTimeout(logoutHandler,60000 )

    }
    
    const contextValue ={
        token: token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logOut:logoutHandler
    }

    return <AuthContext.Provider value={contextValue} >
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;