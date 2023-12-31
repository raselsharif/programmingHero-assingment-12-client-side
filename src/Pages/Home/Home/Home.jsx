import { useEffect, useState } from "react";
import Container from "../../../components/common/Container/Container";
import About from "../../../components/Home/About/About";
import Packages from "../../../components/Home/Packages/Packages";
import useAuth from "../../../hooks/useAuth";
import usePublicAPI from "../../../hooks/usePublicAPI";
import { CarouselWithContent } from "./Banner";

const Home = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [singleUser, setSingleUser] = useState({});
  console.log(singleUser);
  const publicAPI = usePublicAPI();
  useEffect(() => {
    publicAPI.get(`/user/${userEmail}`).then((res) => {
      setSingleUser(res.data);
    });
  }, [publicAPI, userEmail]);

  return (
    <Container>
      <CarouselWithContent />
      <About />
      <Packages />
    </Container>
  );
};

export default Home;
