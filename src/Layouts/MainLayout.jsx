import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../components/Home/Navbar/Navbar";
import { FooterWithLogo } from "../components/common/Footer/Footer";
import Container from "../components/common/Container/Container";

const MainLayout = () => {
  return (
    <Container>
      <ComplexNavbar />
      <Outlet />
      <FooterWithLogo />
    </Container>
  );
};

export default MainLayout;
