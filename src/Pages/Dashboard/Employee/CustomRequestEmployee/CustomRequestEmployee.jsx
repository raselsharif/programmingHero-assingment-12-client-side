import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
const CustomRequestEmployee = () => {
  return (
    <div>
      <SectionHeader heading={"Custom Request"}></SectionHeader>

      <div className="flex justify-center mt-16">
        <Card color="transparent" shadow={true}>
          <form className="px-4 py-6 mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Asset Name
              </Typography>
              <Input
                size="lg"
                placeholder="Asset Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="flex gap-1">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Price
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Price"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Type
                  </Typography>
                  <Select label="Select Type">
                    <Option>returnable</Option>
                    <Option>non-returnable</Option>
                  </Select>
                </div>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Asset Image
              </Typography>
              <input
                size="lg"
                type="file"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 file:bg-gray-800 file:text-white  file:rounded-md  border border-gray-500 rounded-md file:py-1 file:px-3 cursor-pointer file:cursor-pointer"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Why you need this
              </Typography>
              <Textarea label="Write your needs.."></Textarea>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Additional Information
              </Typography>
              <Textarea label="Additional Information"></Textarea>
            </div>
            <Button
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
