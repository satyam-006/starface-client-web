import React, { useState } from 'react'
import { useAuth } from '../../Store/auth';




const URL = "http://localhost:5000/api/model/becomemodel";


const Showcase = () => {
  const [modelUser, setmodelUser] = useState({
    fullname:"",
    gender:"",
    phone:"",
    email:"",
    age:"",
    location:"",
    height:"",
    bust:"",
    waist:"",
    hip:"",
    eyes:"",
    hair:"",
    // image: null,
    // image2: null,

});
const [modelData, setmodelData] = useState(true);

const {user} = useAuth();

if(modelData &&  user){
  setmodelUser({
    username:user.username,
    email: user.email,
    fullname:"",
    phone:"",
    age:"",
    gender:"",
    location:"",
    height:"",
    bust:"",
    waist:"",
    hip:"",
    eyes:"",
    hair:"",
  });
  setmodelData(false);
};



  // handling the input
  
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    // setFile(URL.createObjectURL(e.target.files[0]));
  setmodelUser({
    ...modelUser,
    [ name ]:value,
  });
  
  };

  // handling form submission

  const handleModelSubmit = async (e) =>{
    e.preventDefault();
    alert(modelUser);
    console.log(modelUser);

    try{
      const response = await fetch(URL,{method:"POST",
         headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(modelUser),
       });
       if (response.ok) {
        setmodelUser({
          fullname:"",
    phone:"",
    age:"",
    gender:"",
    location:"",
    height:"",
    bust:"",
    waist:"",
    hip:"",
    eyes:"",
    hair:"",
         });
      
         
          alert('message submitted');
        console.log("message submitted");
      }else{
        alert('message not sent');
        console.log("message not sent");
      }
      
    console.log("model",response);
      // You can also parse the response data if needed
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.log("model",error);
    }

  }

  // Common input class - replace the existing input className with this
  const inputClass = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-gray-700";

  // Radio input class
  const radioClass = "h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer transition duration-150 ease-in-out";

  // Button class
  const buttonClass = "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Model Application</h2>
        <form onSubmit={handleModelSubmit} className="space-y-6">
          {/* Username field */}
          <div className="space-y-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              required
              autoComplete="off"
              value={modelUser.username}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Full name field */}
          <div className="space-y-1">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              id="fullname"
              required
              autoComplete="off"
              value={modelUser.fullname}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Gender field */}
          <div className="space-y-2">
            <h2 className="block text-sm font-medium text-gray-700">Gender</h2>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  required
                  onChange={handleInput}
                  value="male"
                  checked={modelUser.gender === 'male'}
                  className={radioClass}
                />
                <label htmlFor="male" className="ml-2 text-sm text-gray-700 cursor-pointer">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  required
                  onChange={handleInput}
                  value="female"
                  checked={modelUser.gender === 'female'}
                  className={radioClass}
                />
                <label htmlFor="female" className="ml-2 text-sm text-gray-700 cursor-pointer">
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Apply the same pattern to other fields */}
          {/* Example for one more field */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
              autoComplete="off"
              value={modelUser.email}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Phone field */}
          <div className="space-y-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              id="phone"
              required
              autoComplete="off"
              value={modelUser.phone}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Age field */}
          <div className="space-y-1">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              id="age"
              required
              autoComplete="off"
              value={modelUser.age}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Location field */}
          <div className="space-y-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              id="location"
              required
              autoComplete="off"
              value={modelUser.location}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Height field */}
          <div className="space-y-1">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              placeholder="Height in cm"
              id="height"
              required
              autoComplete="off"
              value={modelUser.height}
              onChange={handleInput}
              className={inputClass}
            />
          </div>

          {/* Measurements section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="bust" className="block text-sm font-medium text-gray-700">
                Bust (inches)
              </label>
              <input
                type="number"
                name="bust"
                placeholder="Bust"
                id="bust"
                required
                autoComplete="off"
                value={modelUser.bust}
                onChange={handleInput}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
                Waist (inches)
              </label>
              <input
                type="number"
                name="waist"
                placeholder="Waist"
                id="waist"
                required
                autoComplete="off"
                value={modelUser.waist}
                onChange={handleInput}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="hip" className="block text-sm font-medium text-gray-700">
                Hip (inches)
              </label>
              <input
                type="number"
                name="hip"
                placeholder="Hip"
                id="hip"
                required
                autoComplete="off"
                value={modelUser.hip}
                onChange={handleInput}
                className={inputClass}
              />
            </div>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="eyes" className="block text-sm font-medium text-gray-700">
                Eye Color
              </label>
              <input
                type="text"
                name="eyes"
                placeholder="Eye Color"
                id="eyes"
                required
                autoComplete="off"
                value={modelUser.eyes}
                onChange={handleInput}
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="hair" className="block text-sm font-medium text-gray-700">
                Hair Color
              </label>
              <input
                type="text"
                name="hair"
                placeholder="Hair Color"
                id="hair"
                required
                autoComplete="off"
                value={modelUser.hair}
                onChange={handleInput}
                className={inputClass}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-6">
            <button
              type="submit"
              className={buttonClass}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Showcase