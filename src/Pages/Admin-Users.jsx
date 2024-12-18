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
          <section className="admin-users-section py-8 bg-gray-100">
            <div className="container mx-auto">
              <h1 className="text-2xl font-semibold text-center mb-6">Admin Users Data</h1>
            </div>
            <div className="container mx-auto admin-users">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Phone</th>
                    <th className="py-3 px-4 text-left">Update</th>
                    <th className="py-3 px-4 text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((curUser, index) => {
                    return (
                      <tr key={index} className="border-b hover:bg-gray-100">
                        <td className="text-lg font-bold p-4">{curUser.username}</td>
                        <td className="p-4">{curUser.email}</td>
                        <td className="p-4">{curUser.phone}</td>
                        <td className="p-4">
                          <Link to={`/admin/users/${curUser._id}/edit`} className="text-blue-500 hover:underline">Edit</Link>
                        </td>
                        <td className="p-4">
                          <button
                            className="btn bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
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