import React from 'react'
import StripCheckout, { Token } from 'react-stripe-checkout'
import Logo from "../../assets/d65.jpg"
interface IStripeButtonProps {
  price: number
}

const StripeButton = ({ price }: IStripeButtonProps) => {
  const onToken = (token: Token) => {
    console.log(token)
  }

  const priceForStripe = price * 100 // stripe wants payments in cents
  const publishableKey = 'pk_test_51JH6qOFwGmTjaFU5LdJeCd5KxqapNN2IkuGeDmwyrrELrRiUWcuW5rcFO8nVZNY1VTBdeSiYLJzKt8NLp0G3OMpk00aIdIzSoW'
  return (
    <StripCheckout
      label="Pay Now"
      name="E-commerce Clothing OÜ"
      billingAddress
      shippingAddress
      image={Logo}
      description={`your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken} // on submit func
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
