import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import usePublicAPI from "../../hooks/usePublicAPI";

const JoinEmployee = () => {
  const [show, setShow] = useState(false);
  const { emailPassRegister, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const publicAPI = usePublicAPI();
  const onSubmit = (e) => {
    const form = e;
    const name = form.name;
    const email = form.email;
    const birthDate = form.date;
    const password = form.password;
    const photo = form?.photo;
    console.log(name, email, birthDate, password);
    const userInfo = {
      name,
      email,
      birthDate,
      role: "employee",
      workAt: null,
    };
    emailPassRegister(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            publicAPI
              .post("/user", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  toast.success("Registration Successful");
                  navigate("/");
                }
                console.log(res.data);
              })
              .then((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
            toast.error(`${err.message}`);
          });
      })
      .catch((err) => {
        if (err) {
          toast.error(`${err.message}`);
          console.log(err);
        }
      });
  };
  return (
    <Card color="white" className="max-w-lg mx-auto mt-10 py-6" shadow={true}>
      <div className="text-center">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal max-w-sm mx-auto">
          Nice to meet you! Enter your details to register as a Employee.
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Full Name
          </Typography>
          <Input
            {...register("name", { required: true })}
            name="name"
            size="lg"
            placeholder="Full Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500" role="alert">
              Name is required
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            {...register("email", { required: true })}
            name="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500" role="alert">
              Email is required
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Date of birth
          </Typography>
          <Input
            type="date"
            {...register("date", { required: true })}
            name="date"
          />
          {errors.date?.type === "required" && (
            <p className="text-red-500" role="alert">
              Date of birth is required
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <div className="relative">
            <Input
              {...register("password", {
                required: true,
              })}
              name="password"
              label="Password"
              size="lg"
              type={show ? "text" : "password"}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 mt-3" role="alert">
                Password required
              </p>
            )}
            <div
              onClick={() => setShow(!show)}
              className="absolute right-3 text-xl text-black top-3 cursor-pointer"
            >
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography
          variant="h5"
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-blue-400 hover:text-blue-800 transition-all duration-300"
          >
            Log In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default JoinEmployee;
