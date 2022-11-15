
import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
     <div style={{width:"100vw",height:"30vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
     </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>{
        if(user?.email) return children
        else if(!user?.email){
          return <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
        }

      }
       
      }
    />
  );
};

export default PrivateRoute;

