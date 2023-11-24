import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { useState } from "react";

const TABLE_HEAD = ["#", "Name", "Type", "Availability", "Action"];
const TABLE_ROWS = [
  {
    name: "watch",
    type: "non-returnable",
    availability: "available",
  },
  {
    name: "watch",
    type: "returnable",
    availability: "out-of-stoke",
  },
];
const RequestAssetEmployee = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <SectionHeader heading={"Request for an asset"} />
      <div className="mt-10  flex justify-center gap-5">
        <div>
          <Input variant="standard" label="Search By Name" />
        </div>
        <div>
          <Select color="gray" variant="standard" label="Pending/Approved">
            <Option>Pending</Option>
            <Option>Approved</Option>
          </Select>
        </div>
        <div>
          <Select
            color="gray"
            variant="standard"
            label="Returnable/non-returnable"
          >
            <Option>Returnable</Option>
            <Option>Non-returnable</Option>
          </Select>
        </div>
      </div>
      <div className="mt-10">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, type, availability }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      {type}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={
                        availability === "out-of-stoke"
                          ? "text-red-500 capitalize"
                          : "text-green-500 capitalize"
                      }
                    >
                      {availability.split("-").join(" ")}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {availability === "out-of-stoke" ? (
                        <Button disabled variant="filled">
                          request
                        </Button>
                      ) : (
                        <Button
                          onClick={handleOpen}
                          color="blue-gray"
                          variant="gradient"
                        >
                          Request
                        </Button>
                      )}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <form onSubmit={""}>
        <Dialog open={open} size="xs" handler={handleOpen}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              <Typography className="mb-1" variant="h4">
                Additional Note:
              </Typography>
            </DialogHeader>
          </div>

          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Write the message and then send request.
            </Typography>
            <div className="grid gap-6">
              <Textarea label="Additional Note.." required />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="blue-gray"
              onClick={handleOpen}
            >
              send request
            </Button>
          </DialogFooter>
        </Dialog>
      </form>
    </div>
  );
};

export default RequestAssetEmployee;
