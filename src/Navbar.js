import { navbarItems } from "./navbarItems";
import NavbarInfo from "./NavbarInfo";



const Navbar = () => {
    return (
     <nav>
      <ul className="menus">
      {navbarItems.map((menu, index) => {
     return <NavbarInfo items={menu} key={index} />;
        
    })}
                
   
      </ul>
     </nav>
     
    );
   };
   
   export default Navbar;