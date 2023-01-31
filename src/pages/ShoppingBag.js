import React from "react";

import ShoppingBasket from "../components/cart/ShoppingBasket";
import Layout from "../components/layout/Layout";

const ShoppingBag = () => {
  return (
    <Layout>
      <div>
        <ShoppingBasket />
      </div>
    </Layout>
  );
};

export default ShoppingBag;
