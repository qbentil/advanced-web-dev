import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Navigations } from "../utils";

const RootLayout = ({ page, children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar navigations={Navigations} page={page} />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
