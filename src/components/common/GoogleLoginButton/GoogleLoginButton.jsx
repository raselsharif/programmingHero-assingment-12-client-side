import { Button } from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleLoginButton = () => {
  const { loginGoogle } = useAuth();
  const googleLoginHandler = () => {
    loginGoogle()
      .then((result) => {
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error("Could not logged in!");
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
