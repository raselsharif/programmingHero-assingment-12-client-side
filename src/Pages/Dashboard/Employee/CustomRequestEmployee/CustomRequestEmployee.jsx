import toast from "react-hot-toast";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import usePublicAPI from "../../../../hooks/usePublicAPI";
import useSecureApi from "../../../../hooks/useSecureApi";
import useSingleUser from "../../../../hooks/useSingleUser";
const CustomRequestEmployee = () => {
  const user = useSingleUser();
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const publicAPI = usePublicAPI();
  const secureAPI = useSecureApi();
  const onSubmit = async (data) => {
    const name = data.name;
    const quantity = parseInt(data.quantity);
    const price = parseInt(data.price);
    const type = data.type;
    const why_need = data.why_need;
    const note = data.note;
    const image = data.image[0];

    const imgbbKey = import.meta.env.VITE_imgbb;
    const res = await publicAPI.post(
      `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
      {
        image: image,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    if (res.data.success) {
      const assetInfo = {
        name,
        quantity,
        type,
        price,
        added_date: Date(),
        request_date: Date(),
        image: res.data.data.display_url,
        why_need,
        note,
        request_type: "custom",
        requested_by: user.email,
        status: "pending",
      };
      secureAPI.post("/add-asset", assetInfo).then(() => {
        toast.success("Asset added successfully");
        reset();
      });
    }
  };
  return (
    <div>
      <SectionHeader heading={"Custom Request"}></SectionHeader>

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
                <p className="text-red-500 " role="alert">
                  Asset name required
                </p>
              )}
              <div className="flex gap-1">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Price
                  </Typography>
                  <Input
                    {...register("price", { required: true })}
                    size="lg"
                    placeholder="Price"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.price?.type === "required" && (
                    <p className="text-red-500 mt-3" role="alert">
                      Price Required
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
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Asset Image
              </Typography>
              <input
                {...register("image", { required: true })}
                size="lg"
                type="file"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 file:bg-gray-800 file:text-white  file:rounded-md  border border-gray-500 rounded-md file:py-1 file:px-3 cursor-pointer file:cursor-pointer"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-500 " role="alert">
                  Select a image
                </p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Why you need this
              </Typography>
              <Textarea
                {...register("why_need", { required: true })}
                label="Write your needs.."
              ></Textarea>
              {errors.why_need?.type === "required" && (
                <p className="text-red-500 " role="alert">
                  This field is required
                </p>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Additional Information
              </Typography>
              <Textarea
                {...register("note", { required: true })}
                label="Additional Information"
              ></Textarea>
              {errors.note?.type === "required" && (
                <p className="text-red-500 " role="alert">
                  This field is required
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="mt-6"
              color="blue-gray"
              variant="gradient"
              fullWidth
            >
              send request
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CustomRequestEmployee;
