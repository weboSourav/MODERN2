import { useState } from "react";
import OverylayMenu from "./OverylayMenu";
import Logo from "../assets/pngtree-hand-drawn-cute-vegetarian-green-leaf-logo-png-image_4646854.jpg";
import { AiOutlineMenu } from "react-icons/ai";



export default function NavBar(){
const [menuOpen,setMenuOpen] = useState(false);
const [visible,setVisible] = useState(true);



return(
<>
<nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? 'translate-y-0': '-translate-y-full'}`}>


<div className="flex items-center space-x-4">
<img className="h-10 w-10 overflow-hidden" src={Logo} alt="Logo"/>

<div className="text-white font-bold text-2xl hidden sm:block">
    Sourav

</div>
</div>


<div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2 ">
<AiOutlineMenu />


</div>

</nav>










<OverylayMenu/>

</>

)
}