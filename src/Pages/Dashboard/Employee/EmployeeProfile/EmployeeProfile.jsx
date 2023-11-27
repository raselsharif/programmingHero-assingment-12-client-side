import { Button } from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import useSingleUser from "../../../../hooks/useSingleUser";
import { useState } from "react";
import useSecureApi from "../../../../hooks/useSecureApi";
import toast from "react-hot-toast";

const EmployeeProfile = () => {
  const user = useSingleUser();
  // console.log(user);
  const [edit, setEdit] = useState(false);
  console.log(user);
  const secureAPI = useSecureApi();
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0] || user?.image;
    const birthDate = form.date.value;
    const imgbbKey = import.meta.env.VITE_imgbb;
    const res = await secureAPI.post(
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
      const userInfo = {
        name,
        image: res.data.data.display_url,
        birthDate: birthDate || user?.birthDate,
      };
      secureAPI
        .put(`/update-profile/${user._id}`, userInfo)
        .then(() => {
          toast.success("Profile Updated Successfully");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <SectionHeader heading={"profile"} />
      <form onSubmit={handleProfileUpdate}>
        <div className="flex flex-col items-center gap-3 mt-10">
          <img
            className={
              edit
                ? "hidden"
                : "h-20 w-20 rounded-full object-cover border border-green-200 p-1 shadow-lg shadow-green-100"
            }
            src={
              user?.image
                ? user.image
                : "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg"
            }
          />
          <div className={edit ? "block" : "hidden"}>
            <h2 className="text-xl mb-2 text-center">Change Your Image</h2>
            <input
              name="image"
              type="file"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 file:bg-black file:text-white  file:rounded-md  border border-gray-500 rounded-md file:py-1 file:px-3 cursor-pointer file:cursor-pointer"
            />
          </div>
          <h2 className={edit ? "hidden" : "block text-2xl"}>
            <span className="font-bold">Name: </span> {user?.name}
          </h2>
          <div className={edit ? "block text-center " : "hidden"}>
            <h2 className="text-xl mb-2">Change Your Name:</h2>
            <input
              name="name"
              className="border border-gray-500 px-2 py-1"
              type="text"
              defaultValue={user.name}
            />
          </div>
          <p>Email: {user?.email}</p>
          <p className={edit ? "hidden" : "block"}>
            Date of birth: {user?.birthDate}
          </p>
          <div className={edit ? "flex items-center " : "hidden"}>
            <p className="mr-2">Set your DOB: </p>
            <input
              name="date"
              className="border border-gray-500 px-2 py-1"
              type="date"
            />
          </div>
          <div className="space-x-3">
            <Button
              type="submit"
              disabled={!edit}
              color="green"
              variant="gradient"
            >
              Update
            </Button>
            <Button
              disabled={edit}
              onClick={() => setEdit(true)}
              color="red"
              variant="gradient"
            >
              Edit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeProfile;
