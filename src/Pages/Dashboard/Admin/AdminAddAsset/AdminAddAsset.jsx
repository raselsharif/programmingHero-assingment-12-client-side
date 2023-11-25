import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
const AdminAddAsset = () => {
  return (
    <div>
      <SectionHeader heading={"Add an asset"}></SectionHeader>

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
                    Quantity
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Quantity"
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
                  <Select label="Select Type" className="h-11">
                    <Option>returnable</Option>
                    <Option>non-returnable</Option>
                  </Select>
                </div>
              </div>
            </div>
            <Button
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
