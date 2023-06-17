import { Link } from "react-router-dom"
import searchIcon from "../assets/search.png"
import "../styles/navbar.css"
const Navbar = ({ search, result }) => {
    return (
        <div className="header">

            <div className="logo">
                <h1>Vivid Views</h1>

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
                    <Link className="link-item" to="/sports">Sports</Link>
                </li>
                <li className="list-item">
                    <Link className="link-item" to="/concerts">Concerts</Link>
                </li>
                <li className="list-item">
                    <Link className="link-item" to="/comedy">Comedy</Link>
                </li>
                <li className="list-item">
                    <Link className="link-item" to="/theatre">Theater</Link>
                </li>
                <Link className="link-item" to="/cart">Cart</Link>
            </ul>
         
        </div>
    )
}

export default Navbar