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
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <main className="max-w-4xl mx-auto p-4">
        <div className="section-registration">
          <div className="container bg-white rounded-lg shadow-lg p-8 grid md:grid-cols-2 gap-8">
              <div className="hidden md:block">
                <img src="/images/register.png" alt="a girl trying to do registration" className="w-full h-auto object-cover" />
              </div>

              <div className="w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {/* Input groups */}
                    <div className="flex flex-col">
                      <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-1">Username</label>
                      <input 
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        id="username"
                        required
                        autoComplete="off"
                        value={user.username}
                        onChange={handleInput}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    {/* Similar styling for email, phone, and password inputs */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                  >
                    Register Now
                  </button>
                </form>
              </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register