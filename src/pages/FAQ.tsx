import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {

  return (
    <>
      <div className="bg-white px-64 py-28 grid grid-cols-2 gap-8">
        <div className="items-center">
          <h1 className="text-4xl text-center">Preguntas Frecuentes</h1>
          <div className="mt-22">
            <Accordion type="single" collapsible className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué es OpenHealth?</AccordionTrigger>
                <AccordionContent>
                  OpenHealth es una plataforma que permite a las personas
                  compartir sus datos médicos o biométricos de forma segura,
                  privada y totalmente anónima, para que puedan ser utilizados
                  en investigación científica y entrenamiento de inteligencia
                  artificial orientada a la salud. A cambio de aportar sus
                  datos, los usuarios reciben incentivos económicos
                  proporcionales a su contribución. En pocas palabras:
                  OpenHealth convierte tus datos en un recurso valioso para la
                  ciencia, respetando tu privacidad y pagándote de manera justa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cómo interactuó con OpenHealth?
                </AccordionTrigger>
                <AccordionContent>
                  Podrás interactuar con OpenHealth de dos maneras: 1. Página
                  web Verás tu panel de control (dashboard). Consultarás tus
                  recompensas. Podrás administrar qué datos compartes o dejar de
                  compartir. Tendrás acceso al soporte y a información del
                  proyecto. 2. Aplicación móvil Conectará con tu reloj
                  inteligente o dispositivos de salud. Recopilará tus datos
                  biométricos de forma automática y segura. Te mostrará tus
                  aportes y el impacto de tu información. También tendrá un
                  servicio de ayuda si tienes dudas. Ambas plataformas están
                  diseñadas para ser fáciles de usar, incluso si no tienes
                  conocimientos técnicos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cuál es el precio de OpenHealth?
                </AccordionTrigger>
                <AccordionContent>
                  Para quienes aportan sus datos, OpenHealth es completamente
                  gratis. No tienes que pagar por registrarte ni por formar
                  parte de las pools de datos. Las organizaciones,
                  investigadores o empresas que quieran acceder a los datos (de
                  manera anónima y autorizada) sí pagan por el servicio, y de
                  esos ingresos nace el dinero que luego se reparte a los
                  usuarios.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cuánto puedo ganar con OpenHealth?
                </AccordionTrigger>
                <AccordionContent>
                  Empiezas a ganar cuando tus datos: Son validados y aceptados
                  dentro de la pool, y Una organización compra acceso a esos
                  datos. Cuando una venta se realiza: recibes un porcentaje del
                  valor según tu aporte en la pool, las ganancias se pagan en
                  USDT (dólar digital estable), y todo esto se hace de forma
                  transparente mediante contratos inteligentes. Mientras más
                  datos aportes y más útiles sean para la investigación, mayor
                  será tu participación y tus ingresos
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Qué harán con mi información en OpenHealth?
                </AccordionTrigger>
                <AccordionContent>
                  Empiezas a ganar cuando tus datos: Tu información será
                  utilizada exclusivamente con fines de investigación,
                  desarrollo tecnológico y entrenamiento de modelos de
                  inteligencia artificial relacionados con la salud. Lo más
                  importante es que: Tu identidad nunca será revelada. Tus datos
                  estarán cifrados, no se comparten directamente y no se pueden
                  ver tal cual por nadie. Las empresas o investigadores obtienen
                  acceso controlado, no los datos en bruto. Tú mantienes siempre
                  la propiedad y el control: puedes decidir dejar de compartir
                  cuando quieras. OpenHealth está diseñado para que tus datos
                  contribuyan al avance de la salud global sin riesgo para tu
                  privacidad.y
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="self-center">
          <div
            className="h-86 w-full bg-main mt-22 border-r-8 border-b-8 border-l-2 border-t-2 border-black border-rounded-lg bg-[url('.\assets\OpenHealthLogo.svg')] bg-center bg-no-repeat bg-contain flex items-center justify-center"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
