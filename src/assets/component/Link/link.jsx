import PropTypes from 'prop-types';
function Link ({route}){
    return (
        
            <li className="mr-2 text-white" ><a href={route.path}>{route.name}</a></li>

        
    )
}
Link.proptypes= {
    route:PropTypes.object 
}
export default Link ;