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
const Login = () => {
  const [show, setShow] = useState(false);
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
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <div className="relative">
          <Input label="Password" size="lg" type={show ? "text" : "password"} />
          <div
            onClick={() => setShow(!show)}
            className="absolute right-3 text-xl text-black top-3 cursor-pointer"
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Log In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};
export default Login;
