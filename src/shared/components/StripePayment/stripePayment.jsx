import React, { useEffect } from "react";
import StripeChekcout from "react-stripe-checkout";
import { config } from "dotenv";
config();

const StripePayment = (props) => {
  const { name, price } = props;

  const [product, setProduct] = React.useState({});

  console.log("process env.", process.env.REACT_APP_KEY);

  useEffect(() => {
    setProduct({ name, price });
  }, []);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "content-type": "application/json",
    };

    return fetch(`http://localhost:4000/v1/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <StripeChekcout
      stripeKey={process.env.REACT_APP_KEY}
      token={makePayment}
      name="Buy Consultancy"
    >
      <button className="btn-large blue">
        Buy {product.name} at USD {product.price}
      </button>
    </StripeChekcout>
  );
};

export default StripePayment;
