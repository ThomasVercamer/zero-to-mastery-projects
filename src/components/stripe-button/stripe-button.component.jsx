import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearCart} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({price, dispatch}) => {
    // price should be in cents (according to stripe)
    const priceForStripe = price * 100;
    const publicStripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const onToken = token => {
        console.log(token);
        dispatch(clearCart());
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React E-commerce'
            billingAddress
            shippingAddress
            image='https://cdn.iconscout.com/icon/free/png-512/ecommerce-1742874-1479711.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicStripeKey}
        />
    )
}

export default connect(null)(StripeCheckoutButton);