import { Link } from "react-router-dom"
import searchIcon from "../assets/search.png"
const Navbar = ({ search, result }) => {
    return (
        <div>
            <div>
                <input
                type="search"
                id="search-bar"
                onChange={result}
                className=""
                placeholder="Search Artist By Name"
                >
                
                </input>
                <Link onClick={search} to='/profile'>
                    <img src={searchIcon}></img>
                </Link>
            </div>
            <ul className="">
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li className="">
                    <Link to="/sports">Sports</Link>
                </li>
                <li className="">
                    <Link to="/concerts">Concerts</Link>
                </li>
                <li className="">
                    <Link to="/comedy">Comedy</Link>
                </li>
                <li className="">
                    <Link to="/theatre">Theater</Link>
                </li>
                <Link to="/cart">Cart</Link>
            </ul>
         
        </div>
    )
}

export default Navbar