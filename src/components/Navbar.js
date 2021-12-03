import { Link } from "react-router-dom"



function Navbarr(){
    return(
        <div>
            <ul>
        <li>
          
        <Link to="/Home" style={{color:"white"}}>Home</Link>
        </li>
        <li>
            <Link to="/aboutus"style={{color:"white"}}>About us</Link>
        </li>
        <li>
            <Link to="/Profile"style={{color:"white"}}>Profile</Link>
        </li>
        </ul>
        
                </div>
    )
}

export default Navbarr