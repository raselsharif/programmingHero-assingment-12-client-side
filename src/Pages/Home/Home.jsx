import Container from "../../components/common/Container/Container";
import About from "../../components/common/Home/About/About";
import Packages from "../../components/common/Home/Packages/Packages";
import { CarouselWithContent } from "./Banner";

const Home = () => {
  return (
    <Container>
      <CarouselWithContent />
      <About />
      <Packages />
    </Container>
  );
};

export default Home;
