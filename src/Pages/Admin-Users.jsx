import { useEffect, useState } from "react";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


export const AdminUsers = () => {

    const[users, setUsers] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
               method:"GET",
               headers:{Authorization: authorizationToken,
               },
            });
            const data = await response.json();
            console.log("users", data);
            setUsers(data);

            
            
        } catch (error) {
            console.log("users",error);
        }
    }

    // delete the user using delte button 
    const deleteUser = async (id) => {
        try{const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
            method:"DELETE",
            headers:{
                Authorization: authorizationToken,
            },
         });
         const data = await response.json();
            console.log("users After Deletion", data);
            // setUsers(data); no need create a error

            if(response.ok){
            toast("User Deleted successfully")
                getAllUserData();
            }
  
        } catch(error){
            console.log("deletion not completed",error);
            
        }
        };
    

    useEffect(()=> {
        getAllUserData();
    },[]);

    return (
        <>
          <section className="admin-users-section">
            <div className="container">
              <h1>Admin Users Data </h1>
            </div>
            <div className="container  admin-users">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((curUser, index) => {
                    return (
                      <tr key={index} >
                        <td className="text-3x font-bold p-4">{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td>
                          <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => deleteUser(curUser._id)}
                          >
                            Delete
                          </button>
                        </td> 
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      );
    };