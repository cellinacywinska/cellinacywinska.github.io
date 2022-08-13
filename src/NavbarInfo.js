import Dropdown from "./Dropdown";
import { useState } from "react";

const NavbarInfo = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);


    return (
       // <div onMouseEnter={() => setDropdown(!dropdown)} onMouseLeave={() => setDropdown(false)}>
        <div onClick={() => setDropdown(!dropdown)}> 
            <li className="menu-items" >
                {items.submenu ? (
                    <>
                        <button className="menuButton" type="button" aria-haspopup="menu">
                            {items.title}{" "}
                        </button>
                        {dropdown && <Dropdown submenus={items.submenu} />}
                    </>
                ) : (
                    <a href="/#">{items.title}</a>
                )}
            </li>
        </div>
    );
};

export default NavbarInfo;
