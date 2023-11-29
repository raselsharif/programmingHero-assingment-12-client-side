import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import usePublicAPI from "../../hooks/usePublicAPI";
import toast from "react-hot-toast";

const JoinAdmin = ({ children }) => {
  const { emailPassRegister, updateUserProfile } = useAuth();
  const publicAPI = usePublicAPI();

  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const onSubmit = async (e) => {
    const form = e;
    const name = form.name;
    const company = form.company;
    const email = form.email;
    const birthDate = form.date;
    const password = form.password;
    const photo = form?.photo;
    const logo = form.logo[0];
    console.log(logo);
    const admin_package = form.package;

    // console.log(name, email, birthDate, password, company, logo, admin_package);
    const imgbbKey = import.meta.env.VITE_imgbb;
    const res = await publicAPI.post(
      `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
      {
        image: logo,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    if (res.data.success) {
      const userInfo = {
        name,
        email,
        birthDate,
        role: "admin",
        workAt: true,
        logo: res.data.data.display_url,
        company,
        admin_package,
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
                    navigate("/payment");
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
    }
  };
  return (
    <Card color="white" className="max-w-lg mx-auto mt-10 py-6" shadow={true}>
      <div className="text-center">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal max-w-sm mx-auto">
          Nice to meet you! Enter your details to register as a Admin/HR.
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
            name="name"
            {...register("name", { required: true })}
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
            Company Name
          </Typography>
          <Input
            name="company"
            {...register("company", { required: true })}
            size="lg"
            placeholder="Company Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.company?.type === "required" && (
            <p className="text-red-500" role="alert">
              Company Name is required
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Company Logo
          </Typography>
          <input
            name="logo"
            {...register("logo", { required: true })}
            size="lg"
            type="file"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 file:bg-black file:text-white  file:rounded-md  border border-gray-500 rounded-md file:py-1 file:px-3 cursor-pointer file:cursor-pointer"
          />
          {errors.logo?.type === "required" && (
            <p className="text-red-500" role="alert">
              Logo is required
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Select a package
          </Typography>
          <Controller
            name="package"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                name="package"
                color="gray"
                label="Select Package"
              >
                <Option value="5 Members for $ 5">5 Members for $ 5</Option>
                <Option value="10 Members for $ 10">10 Members for $ 10</Option>
                <Option value="15 Members for $ 15">15 Members for $ 15</Option>
              </Select>
            )}
          />
          {errors.package?.type === "required" && (
            <p className="text-red-500" role="alert">
              Select a package
            </p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            name="email"
            {...register("email", { required: true })}
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
            name="date"
            {...register("date", { required: true })}
            type="date"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
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
              name="password"
              {...register("password", { required: true })}
              label="Password"
              size="lg"
              type={show ? "text" : "password"}
            />
            <div
              onClick={() => setShow(!show)}
              className="absolute right-3 text-xl text-black top-3 cursor-pointer"
            >
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500 mt-3" role="alert">
                Password is required
              </p>
            )}
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

export default JoinAdmin;
