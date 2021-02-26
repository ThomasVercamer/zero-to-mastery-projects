import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckouPage = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)}
        
        <div className='total'><span>$ {cartTotal}</span></div>
        <StripeCheckoutButton price={cartTotal} />
        <div className="test-warning">
            *Please use the folowing test credit card for payments*<br />
            4242 4242 4242 4242 - Exp: date in future - CVV: 123
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckouPage);