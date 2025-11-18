import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/persistants/Footer";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-white">
        <nav className="relative group overflow-hidden">
          {/* Fondo blanco animado */}
          <div className="absolute inset-0 bg-main scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100 z-0 border-b-8"></div>

          {/* Contenido del nav */}
          <div className="relative z-10 flex m-12">
            <div className="flex items-center justify-between px-[232px] py-10">
              <div className="flex items-center gap-4">
                <img
                  src="http://localhost:3845/assets/10c08ed3952818c022241f20cc644c9f61743e5e.svg"
                  alt="OpenHealth Logo"
                  className="w-12 h-12"
                />
                <Link to="/" className="text-2xl">
                  OpenHealth
                </Link>
              </div>
            </div>

            <div className="ml-auto flex mr-24 items-center gap-4">
              <Link
                to="/products"
                className="text-xl hover:text-white mx-4 z-10"
              >
                Productos
              </Link>
              <Link to="/faq" className="text-xl hover:text-white mx-4 z-10">
                FAQ
              </Link>
              <Link
                to="/devs"
                className="text-xl hover:text-white mx-4 z-10"
              >
                Desarrolladores
              </Link>
              <div>
                <Button className="hover:cursor-pointer hover:text-white">
                  <Link to="/dashboard">Abrir APP</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
