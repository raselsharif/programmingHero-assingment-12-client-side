import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../../components/common/GoogleLoginButton/GoogleLoginButton";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { emailPassLogin } = useAuth();

  const onSubmit = (e) => {
    const form = e;
    const email = form.email;
    const password = form.password;
    console.log(email, password);
    emailPassLogin(email, password)
      .then((result) => {
        if (result) {
          toast.success("Logged In Successfully");
          console.log(result);
          navigate("/user-home");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(`${err.message}`);
          console.log(err);
        }
      });
  };
  return (
    <Card className="w-96 mx-auto mt-20">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Log In
        </Typography>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            name="email"
            {...register("email", { required: true })}
            size="lg"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500" role="alert">
              Email is required
            </p>
          )}
          <div className="relative">
            <Input
              name="password"
              {...register("password", { required: true })}
              label="Password"
              size="lg"
              type={show ? "text" : "password"}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 mt-3" role="alert">
                Password is required
              </p>
            )}
            <div
              onClick={() => setShow(!show)}
              className="absolute right-3 text-xl text-black top-3 cursor-pointer"
            >
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" fullWidth>
            Log In
          </Button>
          <Typography
            variant="h5"
            className="mt-6 flex flex-col items-center justify-center"
          >
            Don&apos;t have an account?
            <Typography
              variant="paragraph"
              color="blue"
              className="ml-1 font-bold"
            >
              <Link
                className="hover:text-blue-800 transition-all duration-300"
                to={"/join-admin"}
              >
                Sign up HR
              </Link>
              /
              <Link
                className="hover:text-blue-800 transition-all duration-300"
                to={"/join-employee"}
              >
                Sign up Employee
              </Link>
            </Typography>
          </Typography>
          <div className="mt-3 flex justify-center">
            <GoogleLoginButton />
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};
export default Login;
