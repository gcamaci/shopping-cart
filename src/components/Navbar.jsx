import { Link } from "react-router-dom"

const Navbar = ({ search, result }) => {
    return (
        <div 
        className="
        flex h-20 
        justify-around 
        items-center 
        bg-darkBlue
        text-white
        transition duration-500
        hover:ease-in-out
        hover:bg-white 
        hover:text-black
        ">
            <div>
                <input
                type="search"
                id="search-bar"
                onChange={result}
                className="
                rounded-full
                shadow-lg
                shadow-zinc
                border
                border[#d3d3dc]
                
                "
                >
                
                </input>
                <Link className="border " onClick={search} to='/profile'>Search</Link>
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