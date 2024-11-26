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
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container">
              <div className=''>
                <img src="/images/register.png" alt="a girl trying to do registration" />
              </div>

              {/* ragistration form */}
              <div className="border-2 border-blue-400">
                <h1 className="text-3xl font-bold underline">Login Form</h1>
                <br />
                <form onSubmit={handleloginSubmit} className="border-2 border-blue-400">
                 <div>
                  <label htmlFor="email">email</label>
                  <input 
                   type="email"
                   name='email'
                   placeholder='email'
                   id='email'
                   required
                   autoComplete='false'
                   value={userlogin.email}
                   onChange={handleInput}
                  />
                  
                  <label htmlFor="password">Password</label>
                  <input 
                   type="password"
                   name='password'
                   placeholder='password'
                   id='password'
                   required
                   autoComplete='false'
                   min="8"
                   max="10"
                   value={userlogin.password}
                   onChange={handleInput}
                  />
                  </div>
                  <br />
                  <button type='submit' className='dekhta hun'>Login</button>
                </form>

              </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login