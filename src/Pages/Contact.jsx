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
    <div>
    <form onSubmit={handleContactSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text"
        name='username'
        placeholder='username'
        id='username'
        required
        autoComplete='false'
        value={userContact.username}
        onChange={handleInput}
        />
        <label htmlFor="email">email</label>
        <input 
        type="email"
        name='email'
        placeholder='email'
        id='email'
        required
        autoComplete='false'
        value={userContact.email}
        onChange={handleInput}
        />

      
      </div>
<div>
<label htmlFor="message">message</label><br />
  <textarea name="message" id="message" cols={30} rows={10} required onChange={handleInput} value={userContact.message} autoComplete='false' placeholder='Write your message here!'></textarea>
</div>

      <br />
      <button type='submit'> Send Message </button>
    </form>
    </div>
    </>
  )
}

export default Contact