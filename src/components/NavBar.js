
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
    <div>

       
        <div className="topnav">
        <CartWidget/>
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            {/* <li>
                <NavLink to={'/contact'}>
                Contact
                </NavLink>
            </li> */}
            <a href="#about">About</a>
        </div>
        <div className="diiv">
            <h2>Greenpots</h2>
        </div>  
    
    </div>);
};




export default NavBar;