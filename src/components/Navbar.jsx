import { Link } from "react-router-dom"
import searchIcon from "../assets/search.png"
const Navbar = ({ search, result }) => {
    return (
        <div 
        className="
        flex 
        justify-around 
        items-center 
        bg-darkBlue
        text-white
        transition duration-500
        hover:ease-in-out
        hover:bg-white 
        hover:text-black
        p-4
        ">
            <div className="
            flex
            rounded-full
            shadow-lg
            shadow-zinc
            border
            border-transparent
            hover:border[#d3d3dc]
            bg-white
            p-2
            w-1/4
            ">
                <input
                type="search"
                id="search-bar"
                onChange={result}
                className=" w-3/4"
                placeholder="Search Artist By Name"
                
                >
                
                </input>
                <Link className="w-1/4 flex justify-center " onClick={search} to='/profile'>
                    <img src={searchIcon} className="bg-white"></img>
                </Link>
            </div>
            <ul className="flex justify-between w-1/3 p-2 gap-2">
                <li className="border border-transparent hover:border-purple-300 p-1 hover:bg-purple-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="border border-transparent hover:border-purple-300 p-1 hover:bg-purple-300">
                    <Link to="/sports">Sports</Link>
                </li>
                <li className="border border-transparent hover:border-purple-300 p-1 hover:bg-purple-300">
                    <Link to="/concerts">Concerts</Link>
                </li>
                <li className="border border-transparent hover:border-purple-300 p-1 hover:bg-purple-300">
                    <Link to="/comedy">Comedy</Link>
                </li>
                <li className="border border-transparent hover:border-[#ce3197] p-1 hover:bg-[#ce3197]">
                    <Link to="/theatre">Theater</Link>
                </li>
                <Link to="/cart">Cart</Link>
            </ul>
         
        </div>
    )
}

export default Navbar