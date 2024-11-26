import { useEffect, useState } from "react"
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {

    const [contactData,setContactData] = useState([]);
const { authorizationToken } = useAuth(); 

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", 
                { 
                    method:"GET",
                    headers: {
                        Authorization:authorizationToken,
                    }
                });
                const data = await response.json();
                console.log("contact data",data);
                if(response.ok){
                      setContactData(data);
                }
        } catch (error) {
            console.log("From admin-contacts",error);
        }
    }

// defining the function deleteContactById

const deleteContactById = async (id) => {
    try {
      const response = await fetch (`http://localhost:5000/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers: {
            Authorization:authorizationToken,
        },
      });
         if(response.ok){
            getAllContacts();
            toast.success("deleted successfully");
         }else {
            toast.error("Not Deleted ");
          }
    } catch (error) {
        console.log("admin contact delete",error)
    }
}


    useEffect(()=>{
        getAllContacts();
    },[]);

    return (
    <>
    {contactData.map((curContactData,index) => {
      const {username,email,message,_id} =curContactData;
      return (
        <div className="flex p-4" key={index}>
          <p>{username}</p>
          <p>{email}</p>
          <p>{message}</p>
          <button className="btn" onClick={() => deleteContactById(_id)}>
            delete
          </button>
        </div>
      );
    })
    }
  
    </>
    );
};