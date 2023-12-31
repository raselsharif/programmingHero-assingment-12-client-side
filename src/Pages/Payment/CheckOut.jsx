import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import usePublicAPI from "../../hooks/usePublicAPI";
import useSingleUser from "../../hooks/useSingleUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const { user } = useAuth();
  const [error, setError] = useState();
  const [successful, setSuccessful] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const publicAPI = usePublicAPI();
  const singleUser = useSingleUser();
  const admin_package = singleUser?.admin_package;
  const price = admin_package?.split(" ").pop();
  const totalPrice = parseFloat(price);
  const navigate = useNavigate();
  //   console.log(price);
  //   console.log(singleUser);
  useEffect(() => {
    if (price > 0) {
      publicAPI
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [publicAPI, totalPrice, price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("Payment Error", error);
      setError(error.message);
    } else {
      // console.log("Payment Successful", paymentMethod);
      setError("");
      setSuccessful(`TxID: , ${paymentMethod.id}`);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("Payment not confirm");
      toast.error("Payment Not send");
    } else {
      // console.log("payment successful", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        // console.log("payment successful");
        const userInfo = {
          payment: true,
          amount: totalPrice,
        };
        publicAPI
          .put(`/update-profile/${singleUser._id}`, userInfo)
          .then(() => {
            toast.success("Payment send successfully");
            navigate("/dashboard/admin-home");
          });
      }
    }
  };
  return (
    <div>
      <h3 className="text-center">Your Selected Packages: {admin_package}</h3>
      <div className="max-w-md mx-auto mt-10 border p-4">
        <form onSubmit={handleSubmit}>
          <CardElement
            className="border  p-2"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          ></CardElement>
          <p className="text-red-500 mt-2">{error}</p>
          <p className="text-green-500 mt-2">{successful}</p>
          <Button
            className="mt-6"
            type="submit"
            disabled={!stripe || !totalPrice}
          >
            Pay
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
