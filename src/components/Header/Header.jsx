import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>
                <span>My WEB Site</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;