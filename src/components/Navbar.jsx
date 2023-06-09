import { Link } from "react-router-dom"

const Navbar = ({ search, result }) => {
    return (
        <div className="flex flex-col h-20 border border-red-300 justify-center items-center">
            <div>
                <input
                type="search"
                id="search-bar"
                onChange={result}>
                
                </input>
                <Link className="border border-red-300" onClick={search} to='/profile'>Search</Link>
            </div>
            <ul className="flex">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sports">Sports</Link>
                </li>
                <li>
                    <Link to="/concerts">Concerts</Link>
                </li>
                <li>
                    <Link to="/comedy">Comedy</Link>
                </li>
                <li>
                    <Link to="/theatre">Theater</Link>
                </li>
            </ul>
         
        </div>
    )
}

export default Navbar