import react, { useState } from 'react'
import { useAuth } from '../Store/auth'


function About() {
  const [usernameData, setUsernameData] = useState(true);

  const {user} = useAuth();

  

  return (
    <>
    <h1 className="text-3xl font-bold underline">About</h1>
    Welcome, {user ? `${user.username}` : `to our website`}
    </>
  )
}

export default About
