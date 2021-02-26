import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    // price should be in cents (according to stripe)
    const priceForStripe = price * 100;
    const publicStripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const onToken = token => {
        console.log(token);
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

export default StripeCheckoutButton;