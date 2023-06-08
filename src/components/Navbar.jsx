import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex h-20 border border-red-300 justify-center items-center">
            <ul className="flex">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
            <input type="search" id="search-bar">
            
            </input>
            <button>Search</button>
        </div>
    )
}

export default Navbar