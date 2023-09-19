import { useState } from "react";
import Link from "./Link/link";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

function Hexsa(){
    const [open,setOpen] =useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'Not Found', id: 'notfound' },
      ];
      
    return (
        <nav className="pb-8">
            <ul className="md:flex justify-around bg-neutral-400 mx-16">
                <div className="md:hidden" onClick={()=>setOpen(!open)}>
                    {
                       open === true ? <AiOutlineClose className="text-3xl text-white"></AiOutlineClose> :<FiMenu className="text-3xl  text-white "></FiMenu>
                    }
             </div>
            {
                routes.map(route=><Link key={route.id}route={route}> </Link>)
            }
            </ul>

        </nav>
    )
};
export default Hexsa;