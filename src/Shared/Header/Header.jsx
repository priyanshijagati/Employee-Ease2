import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./Header.css";

const Header = () => {

    const { user, signOutUser, isChecked } = useContext(AuthContext);

    const [isBtn, setIsBtn] = useState(false);

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    const handleLogOutToggle = () => {
        setIsBtn(!isBtn);
    }

    return (
        <div>
            <div className="navbar text-lg font-semibold py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32">
                            <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                            <NavLink activeclassname="active" to={"/dashboard"}>Dashboard</NavLink>
                            <NavLink activeclassname="active" to={"/contact"}>Contact</NavLink>

                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <Link to={"/"}>
                            <div className="flex gap-3 items-center">
                                <img className="w-16" src="https://i.ibb.co/wwwngc5/staff.png" alt="Social Event" />
                                <h2 className="text-3xl font-bold text-[#2E8899]">EMPLOYEE EASE</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center">
                    <div className="lg:flex gap-8 hidden">
                        <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                        <NavLink activeclassname="active" to={"/dashboard"}>Dashboard</NavLink>
                        <NavLink activeclassname="active" to={"/contact"}>Contact</NavLink>
                    </div>
                    <div className="lg:hidden ">
                        <Link to={"/"}>
                            <div className="flex gap-3 items-center">
                                <img className="w-12" src="https://i.ibb.co/wwwngc5/staff.png" alt="Social Event" />
                                <h2 className="text-base font-bold text-[#2E8899] md:flex">EE</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex flex-col items-center justify-center gap-2 border p-2 rounded-lg font-bold">
                                {
                                    isBtn ?
                                        <div className="flex gap-2 justify-center items-center">
                                            <Link className={isChecked ? 'text-[#fff]' : 'text-[#181818]'} onClick={handleLogOut}>Logout</Link>
                                            <button className="ml-4" onClick={handleLogOutToggle}>
                                                {
                                                    user.photoURL ? <img className="mask mask-circle w-12" src={user.photoURL} /> : <img className="mask mask-circle w-12" src="https://i.ibb.co/0rcvLrD/users.png" />
                                                }
                                            </button>
                                        </div>
                                        :
                                        <div className="flex gap-2 justify-center items-center">
                                            <button onClick={handleLogOutToggle}>
                                                {
                                                    user.photoURL ? <img className="mask mask-circle w-12" src={user.photoURL} /> : <img className="mask mask-circle w-12" src="https://i.ibb.co/0rcvLrD/users.png" />
                                                }
                                            </button>
                                        </div>
                                }


                            </div>
                            :
                            <div className="flex gap-8">
                                <NavLink to={"/login"}>Login</NavLink>
                                <NavLink className="md:flex hidden" to={"/register"}>Register</NavLink>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;