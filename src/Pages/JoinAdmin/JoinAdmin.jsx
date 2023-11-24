import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

const JoinAdmin = () => {
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
      <form className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Full Name
          </Typography>
          <Input
            size="lg"
            placeholder="Full Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Company Name
          </Typography>
          <Input
            size="lg"
            placeholder="Company Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Company Logo
          </Typography>
          <input
            size="lg"
            type="file"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 file:bg-black file:text-white  file:rounded-md  border border-gray-500 rounded-md file:py-1 file:px-3 cursor-pointer file:cursor-pointer"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Select a package
          </Typography>
          <Select color="gray" label="Select Package">
            <Option>5 Members for $ 5</Option>
            <Option>10 Members for $ 8</Option>
            <Option>20 Members for $ 15</Option>
          </Select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Date of birth
          </Typography>
          <Input
            type="date"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default JoinAdmin;
