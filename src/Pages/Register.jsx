import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../Store/auth";
import { toast } from 'react-toastify';
const Register = () => {
  
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  


  const navigate = useNavigate();
  // handling the input

const {storetokenInLS} = useAuth();

   const handleInput = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
setUser({
...user,
[name]:value,
});
   };

// handling form submission 

const handleSubmit = async (e) =>{
  e.preventDefault();
  // alert(user);
  console.log(user);
  try{
    const response = await fetch(`http://localhost:5000/api/auth/register`,{method:"POST",
       headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
     });
console.log(response);

const res_data = await response.json();
console.log("response from server", res_data.message);
console.log("response from server", res_data.extraDetails);

     if (response.ok) {
      storetokenInLS(res_data.token);
      // localStorage.setItem("token", res_data); t
      // above line also work same as line 41 but we need to use this multiple time so that we use line 41 to code less and better result
      setUser({username:"",
        email:"",
        phone:"",
        password:""});
        navigate("/");
        toast('Registered successfull');
      console.log("Registered successfull");
    }else{
        toast(res_data.extraDetails ? res_data.extraDetails : res_data.message);
    }
    
  // console.log(response);
    // You can also parse the response data if needed
    // const data = await response.json();
    // console.log("response 2",data);
  }catch(error){
    console.log("register",error);
  }

};


   
     
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
                <h1 className="text-3xl font-bold underline">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit} className="border-2 border-blue-400">
                 <div>
                  <label htmlFor="username">Username</label>
                  <input 
                   type="text"
                   name='username'
                   placeholder='username'
                   id='username'
                   required
                   autoComplete='false'
                   value={user.username}
                   onChange={handleInput}
                  />
                  <label htmlFor="email">Email</label>
                  <input 
                   type="email"
                   name='email'
                   placeholder='email'
                   id='email'
                   required
                   autoComplete='false'
                   value={user.email}
                   onChange={handleInput}
                  />
                  <label htmlFor="phone">Phone</label>
                  <input 
                  className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                   type="number"
                   name='phone'
                   inputMode="numeric"
                   placeholder='phone'
                   id='phone'
                   required
                   autoComplete='false'
                   value={user.phone}
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
                   value={user.password}
                   onChange={handleInput}
                  />
                  </div>
                  <br />
                  <button type='submit' className='dekhta hun'>Register Now</button>
                </form>

              </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Register