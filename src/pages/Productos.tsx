import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Productos = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([33]);
  // const [cantidadValue, setCantidadValue] = useState<string>("");
  // const [origenValue, setOrigenValue] = useState<string>("");
  const [qualityIndexValue, setQualityIndexValue] = useState<number>(0);
  const [precioMercadoValue, setPrecioMercadoValue] = useState<number>(0);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  function handleSlider(value: number[]) {
    setSliderValue(value);
    console.log(value);
  }

  function handleCalc() {
    const calculatedTotal =
      qualityIndexValue * precioMercadoValue * sliderValue[0];
    setTotal(calculatedTotal);
    setAlertVisible(!alertVisible);
    console.log(qualityIndexValue, precioMercadoValue);
    // alert(`El valor neto de tus datos es: $${total.toFixed(2)} USD`);
  }

  return (
    <>
      <div className="w-full min-h-screen bg-white flex py-12 justify-center">
        <div className="w-full max-w-lg">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Número de tokens</CardTitle>
              <CardDescription>
                El número de total de tokens que posees es:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-bold self-center">{sliderValue} OPH</h3>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onValueChange={handleSlider}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="neutral"
                    className="w-full hover:cursor-pointer"
                  >
                    Ajustes
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Ajustar parámetros</SheetTitle>
                    <SheetDescription>
                      Ajusta los parámetros para calcular el valor neto de tus
                      datos
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-name">Cantidad</Label>
                      <Input
                        type="number"
                        id="sheet-demo-name"
                        placeholder="100 OPH"
                        value={sliderValue[0]}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-username">Origen</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona un dispositivo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Dispositivos</SelectLabel>
                            <SelectItem value="pixelwatch">
                              PixelWatch
                            </SelectItem>
                            <SelectItem value="applewatch">
                              AppleWatch
                            </SelectItem>
                            <SelectItem value="galaxywatch">
                              GalaxyWatch
                            </SelectItem>
                            <SelectItem value="fitbit">Fitbit</SelectItem>
                            <SelectItem value="xiaomimiband">
                              Xiaomi miBand
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-username">Quality index</Label>
                      <Input
                        id="sheet-demo-username"
                        placeholder="0.5"
                        type="number"
                        value={qualityIndexValue}
                        onChange={(e) => {
                          setQualityIndexValue(Number(e.target.value));
                        }}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-username">
                        Precio de mercado
                      </Label>
                      <Input
                        id="sheet-demo-username"
                        placeholder="0.05"
                        type="number"
                        value={precioMercadoValue}
                        onChange={(e) => {
                          setPrecioMercadoValue(Number(e.target.value));
                        }}
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button
                      type="submit"
                      className="hover:cursor-pointer"
                      onClick={() => toast.success("Cambios guardados")}
                    >
                      Guardar cambios
                    </Button>
                    <SheetClose asChild>
                      <Button
                        variant="neutral"
                        className="hover:cursor-pointer"
                      >
                        Cerrar
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <Button
                type="submit"
                className="w-full hover:cursor-pointer"
                onClick={() => handleCalc()}
              >
                Calcular
              </Button>
              {alertVisible && (
                <Alert>
                  <CheckCircle2Icon />
                  <AlertTitle>
                    ¡Hecho! el valor neto de tus datos es de ${total.toFixed(2)}
                  </AlertTitle>
                  <AlertDescription>
                    Este es un cálculo aproximado basado en los parámetros que
                    suministró.
                  </AlertDescription>
                </Alert>
              )}
              <div className="mt-4 text-center text-sm">
                ¿No tienes $OPH? <Link to="/getstarted">Empieza aquí</Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Productos;
