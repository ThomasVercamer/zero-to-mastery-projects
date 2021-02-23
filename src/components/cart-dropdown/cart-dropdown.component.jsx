import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div class='cart-items'></div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

export default CartDropdown;