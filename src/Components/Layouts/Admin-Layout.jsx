import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaRegListAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useAuth } from "../../Store/auth";


export const AdminLayout = () => {

    const { user, isLoading } = useAuth();

    if(isLoading){
        return ( <h1>Loading...</h1> );
    }
    if(!user.isAdmin){
        return (<Navigate to="/" />);
    }
    return (
    <>
    <header>
        <div>
            <nav>
                <ul>
                    <li> <NavLink to="/admin/users"><FaUser /> Users</NavLink></li>
                    <li><NavLink to="/admin/contacts"><FaRegMessage /> Contacts</NavLink></li>
                    <li><NavLink to="/service"> <FaRegListAlt />Services</NavLink></li>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet />
    </>
);
}

