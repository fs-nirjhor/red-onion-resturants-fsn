import { Navigate, Outlet, useLocation } from "react-router-dom";


const PrivateRoute = (props) => {
	const {isAllowed, children, redirectPath="/login"} = props;
	const location = useLocation();
if (!isAllowed) {
	return <Navigate to={redirectPath} state ={{from: location}}/>
} else {
	return children ? children : <Outlet/>
}
};

export default PrivateRoute;