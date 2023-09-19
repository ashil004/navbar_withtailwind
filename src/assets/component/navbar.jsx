import Link from "./Link/link";

function Hexsa(){
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
            {
                routes.map(route=><Link key={route.id}route={route}> </Link>)
            }
            </ul>

        </nav>
    )
};
export default Hexsa;