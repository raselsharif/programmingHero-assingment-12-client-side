import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../components/common/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <ComplexNavbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;