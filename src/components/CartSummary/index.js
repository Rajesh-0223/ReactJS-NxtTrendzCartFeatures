// Write your code here
// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const gettingTotalPrice = Item => {
        const {price, quantity} = Item
        return price * quantity
      }
      const eachItemPrice = () => {
        const ActualPrice = cartList.map(eachItem =>
          gettingTotalPrice(eachItem),
        )
        const TotalPrice = ActualPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
        )
        return TotalPrice
      }

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs{' '}
              {eachItemPrice()}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
