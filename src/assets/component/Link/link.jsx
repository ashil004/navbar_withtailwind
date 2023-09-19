import PropTypes from 'prop-types';
function Link ({route}){
    return (
        
            <li className="mr-2 text-white hover:bg-neutral-200 px-6 mr-10" ><a href={route.path}>{route.name}</a></li>

        
    )
}
Link.propTypes= {
    route:PropTypes.object 
}
export default Link ;