import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, isCartHidden }) => (
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
            <CartIcon />
        </div>
        {isCartHidden || <CartDropdown />}
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    isCartHidden: state.cart.isCartHidden
});

export default connect(mapStateToProps)(Header);