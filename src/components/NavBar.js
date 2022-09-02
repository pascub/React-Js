
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
    <div>

       
        <div className="topnav">
        <CartWidget/>
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <div className="diiv">
            <h2>Greenpots</h2>
        </div>  
    
    </div>);
};




export default NavBar;