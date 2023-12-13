import { Button } from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import usePublicAPI from "../../../hooks/usePublicAPI";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const { loginGoogle } = useAuth();
  const backToHome = useNavigate();
  const publicAPI = usePublicAPI();
  const googleLoginHandler = () => {
    loginGoogle()
      .then((result) => {
        // console.log(result);
        const user = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          role: "employee",
          workAt: null,
        };
        publicAPI
          .post("/user", user)
          .then((res) => {
            toast.success("Logged In Successfully");
            backToHome("/");
          })
          .catch((err) => {
            toast.error("Not Logged In");
          });
      })
      .catch((err) => {
        // toast.error("Not Logged In");
      });
  };
  return (
    <div>
      <Button
        onClick={googleLoginHandler}
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
    </div>
  );
};

export default GoogleLoginButton;
