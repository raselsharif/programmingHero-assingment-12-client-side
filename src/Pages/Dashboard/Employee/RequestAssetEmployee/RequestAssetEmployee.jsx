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
import useAllAsset from "../../../../hooks/useAllAsset";
import useSecureApi from "../../../../hooks/useSecureApi";
import useSingleUser from "../../../../hooks/useSingleUser";
import { toast } from "react-hot-toast";

const TABLE_HEAD = ["#", "Name", "Type", "Availability", "Action"];
const RequestAssetEmployee = ({ children }) => {
  const user = useSingleUser();
  console.log(user);
  const secureAPI = useSecureApi();
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const handleOpen = () => setOpen(!open);
  const assets = useAllAsset();
  const saveId = (id) => {
    setProductId(id);
  };
  const handleRequest = (id) => {
    // e.preventDefault();
    // const note = e.target.note.value;
    const requestInfo = {
      requested_by: user.email,
      requester_name: user.name,
      request_date: Date(),
      status: "pending",
    };
    secureAPI.put(`/asset-update/${id}`, requestInfo).then(() => {
      toast.success("Requested successfully");
    });
  };
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
              {assets?.map(({ name, type, quantity, _id }, index) => (
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
                        quantity <= 0
                          ? "text-red-500 capitalize"
                          : "text-green-500 capitalize"
                      }
                    >
                      {quantity <= 0 ? "Out of stoke" : "Available"}
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
                      {quantity <= 0 ? (
                        <Button disabled variant="filled">
                          request
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleRequest(_id)}
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
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Additional Note:
            </Typography>
          </DialogHeader>
        </div>

        <form onSubmit={handleRequest}>
          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Write the message and then send request.
            </Typography>
            <div className="grid gap-6">
              <Textarea label="Additional Note.." name="note" required />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              close
            </Button>
            <Button type="submit" variant="gradient" color="blue-gray">
              send request
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default RequestAssetEmployee;
