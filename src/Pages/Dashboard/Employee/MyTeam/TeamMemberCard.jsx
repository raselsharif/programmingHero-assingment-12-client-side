import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const TeamMemberCard = ({ team }) => {
  return (
    <Card className="w-full">
      <CardHeader floated={false} className="h-56">
        <img
          className="h-full w-full object-cover"
          src={
            team?.image
              ? team.image
              : "https://www.kindpng.com/picc/m/77-777209_silhouetteimagesb-male-profile-pic-empty-hd-png-download.png"
          }
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {team.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {team.role}
        </Typography>
      </CardBody>
    </Card>
  );
};
export default TeamMemberCard;
