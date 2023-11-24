import Container from "../../../components/common/Container/Container";
import About from "../../../components/Home/About/About";
import Packages from "../../../components/Home/Packages/Packages";
import HomeAdmin from "../HomeAdmin/HomeAdmin";
import HomeEmployee from "../HomeEmployee/HomeEmployee";
import { CarouselWithContent } from "./Banner";

const Home = () => {
  return (
    <Container>
      <HomeAdmin />
      <HomeEmployee />
      <CarouselWithContent />
      <About />
      <Packages />
    </Container>
  );
};

export default Home;
