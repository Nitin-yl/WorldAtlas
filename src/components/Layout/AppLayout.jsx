import Header from "../UI/Header";
import Footers from "../UI/Footers";
import { Outlet } from "react-router-dom";
import About from "../../Pages/About";

const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footers />
    </div>
  )
}

export default AppLayout