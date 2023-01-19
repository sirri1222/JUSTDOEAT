import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const CartContext = {
    item: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  return (

    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
