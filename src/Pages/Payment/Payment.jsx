import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";

const stipePromise = loadStripe(import.meta.env.VITE_payment_PK);
const Payment = () => {
  return (
    <div>
      <SectionHeader heading={"Payment"} />
      <div>
        <Elements stripe={stipePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
