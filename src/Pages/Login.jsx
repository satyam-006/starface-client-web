import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../Store/auth";
import { toast } from 'react-toastify';

const Login = () => {
  const [userlogin, setUserlogin] = useState({
    email:"",
    password:"",
  });
  // handling the input
  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();

   const handleInput = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
setUserlogin({
...userlogin,
[name]:value,
});
   };

// handling form submission 

const handleloginSubmit = async (e) =>{
  e.preventDefault();
  // alert(userlogin);
  console.log(userlogin);

  try{
    const response = await fetch("http://localhost:5000/api/auth/login",{method:"POST",
       headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(userlogin),
     });

     console.log("login form", response);
     const res_data = await response.json();
     console.log("response from server", res_data);

     if (response.ok) {
      storetokenInLS(res_data.token);
      setUserlogin({email:"",
       password:""});
       navigate("/");
       toast('LOGIN successfull');
      console.log("LOGIN successfull");
    }else{
      toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      console.log("invalid credential");
    }
    
  console.log("login",response);
    // You can also parse the response data if needed
    // const data = await response.json();
    console.log(res_data);
  }catch(error){
    console.log("login",error);
  }
}


   
     
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <main className="w-full max-w-4xl p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block">
                <img src="/images/register.png" alt="a girl trying to do registration" className="w-full h-auto" />
              </div>

              <div className="w-full max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login</h1>
                <form onSubmit={handleloginSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        id="email"
                        required
                        autoComplete="email"
                        value={userlogin.email}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                        required
                        autoComplete="current-password"
                        value={userlogin.password}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Login
                  </button>
                </form>
              </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login