import { Link } from "react-router-dom"
import searchIcon from "../assets/images/search.png"
import VividLogo from "../assets/images/vivid-transparent.png"
import "../styles/navbar.css"
const Navbar = ({ search, result}) => {
    return (
        <div className="header">    

            <div className="logo">
                <img className="img-logo" src={VividLogo}></img>

            </div>
            <div className="search-container">
                <input
                type="search"
                id="search-bar"
                onChange={result}
                className="search-bar"
                placeholder="Search Artist By Name"
                >
                
                </input>
                <Link onClick={search} to='/profile'>
                    <img src={searchIcon}></img>
                </Link>
            </div>
            <ul className="link-container">
                <li className="list-item">
                    <Link className="link-item" to="/">Home</Link>
                </li>
                <li className="list-item">
                    Sports
                </li>
                <li className="list-item">
                    Concerts
                </li>
                <li className="list-item">
                    Comedy
                </li>
                <li className="list-item">
                    Theater
                </li>
            </ul>
         
        </div>
    )
}

export default Navbar