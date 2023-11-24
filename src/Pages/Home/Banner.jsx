import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl mt-2" loop="true">
      <div className="relative h-[500px] w-full">
        <img
          src="https://tinyurl.com/ns69a5k8"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-3/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             Join as HR/Admin
            </Typography>
            <div className="flex justify-center gap-2">
             <Link to={''}>
             <Button size="lg" color="teal">
                click to join
              </Button>
             </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://tinyurl.com/5n64bfwu"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            Join as a Employee
            </Typography>
            <div className="flex gap-2">
             ,<Link>
             <Button size="lg" color="brown">
               Click to join
              </Button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}