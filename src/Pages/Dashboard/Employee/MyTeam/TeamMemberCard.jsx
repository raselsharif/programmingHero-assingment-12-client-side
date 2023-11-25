import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const TeamMemberCard = () => {
  return (
    <Card className="w-full">
      <CardHeader floated={false} className="h-56">
        <img
          className="h-full w-full object-cover"
          src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Admin/Employee
        </Typography>
      </CardBody>
    </Card>
  );
};
export default TeamMemberCard;
