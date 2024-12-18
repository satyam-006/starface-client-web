import React, { useState } from 'react'
import { useAuth } from '../Store/auth';



const URL = "http://localhost:5000/api/form/contact";


const Contact = () => {
  const [userContact, setuserContact] = useState({
    username:"",
    email:"",
    message:"",
  });
const [userData, setUserData] = useState(true);

const {user} = useAuth();

if(userData &&  user){
  setuserContact({
    username:user.username,
    email: user.email,
    message: "",
  });
  setUserData(false);
};



  // handling the input
  
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
  setuserContact({
    ...userContact,
    [ name ]:value,
  });
  };

  // handling form submission

  const handleContactSubmit = async (e) =>{
    e.preventDefault();
    alert(userContact);
    console.log(userContact);

    try{
      const response = await fetch(URL,{method:"POST",
         headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(userContact),
       });
       if (response.ok) {
        setuserContact({
          message: "",
         });
      
         
          alert('message submitted');
        console.log("message submitted");
      }else{
        alert('message not sent');
        console.log("message not sent");
      }
      
    console.log("contact",response);
      // You can also parse the response data if needed
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.log("contact",error);
    }

  }

  return (
    <>
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleContactSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text"
            name='username'
            placeholder='Username'
            id='username'
            required
            autoComplete='false'
            value={userContact.username}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email"
            name='email'
            placeholder='Email'
            id='email'
            required
            autoComplete='false'
            value={userContact.email}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea name="message" id="message" cols={30} rows={10} required onChange={handleInput} value={userContact.message} autoComplete='false' placeholder='Write your message here!' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <br />
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Contact