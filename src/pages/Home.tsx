import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Badge } from '@/components/ui/badge'

const imgCardiology1 = "http://localhost:3845/assets/08dfbfc969c6182482f9ba7b803589035a1bf8c8.svg";

function Home() {
  return (
    <div className="bg-white min-h-screen py-52">

      {/* Status Bar */}
      <div className="px-[232px] mb-12">
        <Badge variant="neutral">Lorem ipsum sit dolorem • Now Live in VANA</Badge>
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
            <Link to="/getstarted">
              Empezar
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-[232px] mb-20">
        <h3 className="text-4xl font-semibold text-black mb-4 text-center">
          ¿Por qué OpenHealth?
        </h3>
        <p className="text-2xl text-gray-500 text-center mb-12">
          Lorem ipsum sit dolorem
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-end">
            <div className="w-full bg-gray-300 rounded-3xl h-64 mb-4 flex items-center justify-center">
              <img src={imgCardiology1} alt="Feature Icon" className="w-56 h-56" />
            </div>
            <p className="text-xl font-medium text-black">Lorem ipsum sit dolorem</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-end">
            <div className="w-full bg-gray-300 rounded-full h-64 mb-4 flex items-center justify-center" style={{ borderRadius: '48px' }}>
              <img src={imgCardiology1} alt="Feature Icon" className="w-56 h-56" />
            </div>
            <p className="text-xl font-medium text-black">Lorem ipsum sit dolorem</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
