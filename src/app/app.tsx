import './app.scss';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../components/button';
import Dashboard from '../components/dashboard';
import SellProduct from '../views/sell-product';
import Store from '../views/store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Profile from '../views/profile';
import Cart from '../views/cart';

function App() {
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	return (
		<Dashboard
			sidebar={[
				<Button key='profile' disabled={!isAuthenticated}><AccountBoxOutlinedIcon /></Button>,
				<Button key='store'><StoreMallDirectoryOutlinedIcon /></Button>,
				<Button key='cart' ><ShoppingCartOutlinedIcon /></Button>,
				<Button key='sell'><SellOutlinedIcon /></Button>,
				<Button key='signin' onClick={() => loginWithRedirect()} disabled={isAuthenticated}><LoginOutlinedIcon /></Button>,
				<Button key='signout' onClick={() => logout()} disabled={!isAuthenticated}><LogoutOutlinedIcon /> </Button>
			]}
			views={[
				<Profile key='profile' {...user} />, 
				<Store key='store' />,
				<Cart key='cart' />,
				<SellProduct key='sell' />,
			]}
		/>
	);
	
}

export default App;