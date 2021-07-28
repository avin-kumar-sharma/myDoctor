import React, { useEffect } from "react";
import StripeChekcout from "react-stripe-checkout";
import { config } from "dotenv";
import { Button } from "@material-ui/core";
config();

const StripePayment = (props) => {
  const { name, price, onClick } = props;
  const submit_color = { color: "white" };

  const [product, setProduct] = React.useState({});

  useEffect(() => {
    setProduct({ name, price });
    console.log("In stripe payment.");
    console.log(product);
    console.log(props);
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
      <Button
        className="btn-large blue"
        variant="contained"
        fullWidth
        style={submit_color}
        color="primary"
        onClick={onClick}
      >
        Pay
      </Button>
    </StripeChekcout>
  );
};

export default StripePayment;
