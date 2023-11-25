import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const EventCard = ({ children }) => {
  return (
    <Card
      color="transparent"
      shadow={true}
      className="w-full p-4 overflow-hidden"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>Date of birth:</Typography>
        <Typography>Remaining Days:</Typography>
      </CardBody>
      <div className="absolute rotate-45 right-2 top-3 text-center bg-pink-300 text-white px-2 rounded-2xl font-semibold py-1">
        <p className=" animate-pulse">
          Happy <br /> Birthday
        </p>
      </div>
    </Card>
  );
};

export default EventCard;
