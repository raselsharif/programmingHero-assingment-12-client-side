import { useEffect, useState } from "react";
import Container from "../../../components/common/Container/Container";
import About from "../../../components/Home/About/About";
import Packages from "../../../components/Home/Packages/Packages";
import useAuth from "../../../hooks/useAuth";
import usePublicAPI from "../../../hooks/usePublicAPI";
import HomeAdmin from "../HomeAdmin/HomeAdmin";
import HomeEmployee from "../HomeEmployee/HomeEmployee";
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
  }, []);

  return (
    <Container>
      {singleUser?.role === "admin" ? (
        <HomeAdmin />
      ) : singleUser?.role === "employee" ? (
        <HomeEmployee />
      ) : (
        <>
          <CarouselWithContent />
          <About />
          <Packages />
        </>
      )}
    </Container>
  );
};

export default Home;
