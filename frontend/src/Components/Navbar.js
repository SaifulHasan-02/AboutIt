import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">AboutIt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    
                        <li className="nav-link-active">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>                        
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>                          
                        </li>
                    </ul>    


                </div>
            </nav>


            <Outlet />
        </>
    )
};

export default Navbar;


