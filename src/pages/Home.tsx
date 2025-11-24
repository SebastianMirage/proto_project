import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import OpenLogo from "../assets/OpenHealthLogo.svg";
import Marquee from "@/components/ui/marquee";

function Home() {
  const items = ["Recupera el control", "•", "Obtén recompensas", "•", "Monitorea tus datos", "•", "Empieza ahora", "•"];

  return (
    <>
    <div className="py-12">
      <Marquee items={items} />
    </div>
      <div className="bg-white min-h-screen py-12">
        {/* Status Bar */}
        <div className="px-[232px] mb-12">
          <Badge variant="neutral">
            Lorem ipsum sit dolorem • Now Live in VANA
          </Badge>
        </div>

        {/* Hero Section */}
        <section className="px-[232px] mb-20">
          <h2 className="text-5xl font-semibold text-black text-center mb-4 max-w-4xl">
            Primer DAO para datos biométricos
          </h2>
          <p className="text-3xl text-gray-500 text-center mb-8 max-w-2xl">
            Analiza, gana, guarda y sube tus datos
          </p>
          <div className="flex justify-start">
            <Button className="hover:cursor-pointer">
              <Link to="/getstarted">Empezar</Link>
            </Button>
          </div>
        </section>

        {/* Why Section */}

        <div className="px-[232px] place-items-center">
          <div className="grid grid-cols-[1.5fr_2fr] gap-12">
            <div className="">
              <h1 className="text-center font-bold text-3xl my-6">
                ¿Por qué OpenHealth?
              </h1>
              <h2 className="text-center font-bold text-xl my-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </h2>
            </div>
            <div className="">
              <div className="my-6">
                <Card className="w-full">
                  <img className="w-20 self-center" src={OpenLogo} alt="logo" />
                </Card>
              </div>
              <div className="my-6">
                <Card className="w-full">
                  <img className="w-20 self-center" src={OpenLogo} alt="logo" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
