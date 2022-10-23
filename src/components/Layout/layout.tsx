import Topbar from "../Topbar/topbar";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative ">
      <div className="absolute top-0 sticky bg-white z-20">
        <Topbar />
        <Navbar  />
        
      </div>
      
      <main className="h-full overflow-y-auto relative w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
