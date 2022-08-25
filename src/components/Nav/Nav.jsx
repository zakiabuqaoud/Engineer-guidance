import "./Nav.css"
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from "react-router-dom";

const Nav =()=> {
    return (
        <nav className="flex handLeftPaddingAndTwentyRest">
            <div className="logo">
                <span>&lt;</span>  Simple Soft <span className="orange">/</span> <span>&gt;</span>
            </div>
            <ul className="flex">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Major</li>
                <li>Materials</li>
                <li><Link to="/contactWithAdmin">Contact</Link></li>
            </ul>
            <div>
                <input type="text" />
                <AiOutlineSearch/>
            </div>

        </nav>
    );
}
export default Nav