import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div className="nav">
            <div className="search-container">
                <NavLink className="home" to="/">
                    Home
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
