import { NavLink } from "react-router-dom";
import moneyBag from "./moneyBag.png"
import brainHeart from "./brainHeart.png";
import { Link } from "react-router-dom";
function Nav({toggleTheme, theme, setTheme}) {

  
  let activeStyle = {
    textDecoration:"none",
    color: "beige",
  };

  let nonactiveStyle = {
    textDecoration:"none",

    color: "limegreen",
  };

  return (
    <span> 
    
    <nav className="navBar">
      <ul className="no-bullets">
       
         
    

        <li>
          <NavLink
            className="links"
            to="/receipts"
            exact="true"
            style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
          >
            All Receipts
          </NavLink>
        </li>
 <li><Link to="/"><img className="brain"
      style={{
        maxWidth: "25px",
       marginRight: "100%",
    
      }}
      src={brainHeart}
      alt="home logo button"
    /></Link></li>
        <li>
          {" "}
          <NavLink
            className="links"
            to="/receipts/new"
            exact="true"
            style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
          >
            New Form
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className="links"
            to="/storeinfo"
            exact="true"
            style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
          >
            Store Info Form
          </NavLink>
        </li>
      </ul>
    </nav></span>
  );
}

export default Nav;
