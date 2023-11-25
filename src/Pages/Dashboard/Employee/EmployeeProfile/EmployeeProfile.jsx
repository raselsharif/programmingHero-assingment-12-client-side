import { Button } from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";

const EmployeeProfile = () => {
  return (
    <div>
      <SectionHeader heading={"profile"} />
      <div className="flex flex-col items-center gap-3 mt-10">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
          alt="profile image"
        />
        <h2 className="text-xl">
          <span className="font-bold">Name:</span> Rasel Sharif
        </h2>
        <p>Email: raselsharif@gmail.com</p>
        <p>Date of birth: 26/06/1996</p>
        <div className="space-x-3">
          <Button color="green" variant="gradient">
            Update
          </Button>
          <Button color="red" variant="gradient">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
