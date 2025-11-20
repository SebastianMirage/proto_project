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

const Productos = () => {

  const [sliderValue, setSliderValue] = useState<number[]>([33]);

  function handleSlider(value: number[]) {
    setSliderValue(value);
    console.log(value);
  }

  return (
    <>
      <div className="w-full min-h-screen bg-white flex py-12 justify-center">
        <div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Número de tokens</CardTitle>
              <CardDescription>
                El número de total de tokens que posees es:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-bold self-center">{sliderValue} OPH</h3>
                <Slider defaultValue={[33]} max={100} step={1} onValueChange={handleSlider}/>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="neutral" className="w-full">
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
                            <SelectItem value="pixelwatch">PixelWatch</SelectItem>
                            <SelectItem value="applewatch">AppleWatch</SelectItem>
                            <SelectItem value="galaxywatch">GalaxyWatch</SelectItem>
                            <SelectItem value="fitbit">Fitbit</SelectItem>
                            <SelectItem value="xiaomimiband">Xiaomi miBand</SelectItem>
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
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button type="submit">Guardar cambios</Button>
                    <SheetClose asChild>
                      <Button variant="neutral">Cerrar</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <Button type="submit" className="w-full">
                Calcular
              </Button>
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
