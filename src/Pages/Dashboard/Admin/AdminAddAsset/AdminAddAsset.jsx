import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { Controller, useForm } from "react-hook-form";
import useSecureApi from "../../../../hooks/useSecureApi";
import toast from "react-hot-toast";
const AdminAddAsset = () => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const secureAPI = useSecureApi();
  const onSubmit = (data) => {
    const name = data.name;
    const quantity = parseInt(data.quantity);
    const type = data.type;
    console.log(name, quantity, type);
    const assetInfo = {
      name,
      quantity,
      type,
      added_date: Date(),
    };
    secureAPI.post("/add-asset", assetInfo).then(() => {
      toast.success("Asset added successfully");
      reset();
    });
  };
  return (
    <div>
      <SectionHeader heading={"Add an asset"}></SectionHeader>

      <div className="flex justify-center mt-16">
        <Card color="transparent" shadow={true}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 py-6 mt-8 mb-2 w-96 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Asset Name
              </Typography>
              <Input
                {...register("name", { required: true })}
                size="lg"
                placeholder="Asset Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 -my-3" role="alert">
                  Name is required
                </p>
              )}
              <div className="flex gap-1">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Quantity
                  </Typography>
                  <Input
                    {...register("quantity", { required: true })}
                    size="lg"
                    placeholder="Quantity"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.quantity?.type === "required" && (
                    <p className="text-red-500 mt-3" role="alert">
                      Quantity is required
                    </p>
                  )}
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Type
                  </Typography>
                  <Controller
                    name="type"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        className="h-11"
                        {...field}
                        name="package"
                        color="gray"
                        label="Select Package"
                      >
                        <Option value="returnable">returnable</Option>
                        <Option value="non-returnable">non-returnable</Option>
                      </Select>
                    )}
                  />
                  {errors.type?.type === "required" && (
                    <p className="text-red-500 mt-3" role="alert">
                      Select a type
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="onsubmit"
              className="mt-6"
              color="blue-gray"
              variant="gradient"
              fullWidth
            >
              Add Asset
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminAddAsset;
