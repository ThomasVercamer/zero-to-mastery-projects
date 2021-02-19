import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Link to='/'>
                <Logo className='logo' />
            </Link>
        </div>

        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser
                ? <span className='option' onClick={() => auth.signOut()}>Sign Out</span>
                : <Link className='option' to='/sign-in'>Sign In</Link>
            }
        </div>
    </div>
);

export default Header;