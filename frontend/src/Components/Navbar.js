import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-id">
                <a className="navbar-brand" id="title" href="/#">About<span className="span">It</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    
                        <li className="nav-link-active">
                            <NavLink to="/" style={{textDecoration: 'none' }}>Home</NavLink>
                        </li>
                        <li className="nav-link-active">
                            <NavLink to="/signup" style={{textDecoration: 'none' }}>Signup</NavLink>
                        </li>
                        <li className="nav-link-active">
                            <NavLink to="/login" style={{textDecoration: 'none' }}>Login</NavLink>
                        </li>
                        <li className="nav-link-active">
                            <NavLink to="/about" style={{textDecoration: 'none' }}>About</NavLink>                        
                        </li>
                        <li className="nav-link-active">
                            <NavLink to="/contact" style={{textDecoration: 'none' }}>Contact</NavLink>                          
                        </li>
                    </ul>    


                </div>
            </nav>


            <Outlet />
        </>
    )
};

export default Navbar;


