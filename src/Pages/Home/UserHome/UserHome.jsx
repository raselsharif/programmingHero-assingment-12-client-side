import { useEffect, useState } from "react";
import Container from "../../../components/common/Container/Container";
import useAuth from "../../../hooks/useAuth";
import usePublicAPI from "../../../hooks/usePublicAPI";
import HomeAdmin from "../HomeAdmin/HomeAdmin";
import HomeEmployee from "../HomeEmployee/HomeEmployee";
import { ComplexNavbar } from "../../../components/Home/Navbar/Navbar";
import { FooterWithLogo } from "../../../components/common/Footer/Footer";

const UserHome = () => {
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
      <ComplexNavbar />
      {singleUser?.role === "admin" ? <HomeAdmin /> : <HomeEmployee />}
      <FooterWithLogo />
    </Container>
  );
};

export default UserHome;
