import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""}`} style={{backgroundColor:"white"}}>
      {submenus.map((submenu, index) => (
       <li key={index} className="menu-items">
        {/* <div>{submenu.link}</div> */}
        <Link to={submenu.link}>{submenu.title}</Link>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;