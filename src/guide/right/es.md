[init]: /guide/right/init.jpg
[usb]: /guide/right/usb.png
[parts]: /guide/right/parts.jpg

[disassemble]: /guide/right/disassemble.jpg
[disassemble1]: /guide/right/disassemble1.jpg
[disassemble2]: /guide/right/disassemble2.jpg

[assembly]: /guide/right/assembly.jpg
[assembly1]: /guide/right/assembly1.jpg
[assembly2]: /guide/right/assembly2.jpg
[assembly3]: /guide/right/assembly3.jpg
[assembly4]: /guide/right/assembly4.jpg

![Init][init]

El lado derecho del joystick esta pensado para el caso de utilizar una raspberry pi y querer exponer los puertos USB de la misma.

Estos puertos se pueden utilizar para conectar otros joysticks o bien un teclado y mouse.

> En caso de no exponer los puertos simplemente no se realiza ninguna abertura.

La pieza a utilizar esta preparada para un tipo USB switch/hub específico y esto es por su disposición de puertos, calidad y simplicidad. 

![USB][usb]

Es un dispositivo genérico por lo que se lo puede encontrar de distintas marcas y colores

### Materiales  

![Partes][parts]

La pieza 3D es `USB_rack.stl`

* 2 Tornillos 5/32" x 12 mm
* 2 Tuercas __Estampadas__ 5/32" 
* 2 Arandelas Elástica Growler 5/32" 
* 4 Tornillos auto-perforante 1/8" x 10 mm
* USB Switch/Rack de 4 puertos

---

### Desarmando el USB switch/hub

![Desarmado][disassemble]

La caja esta cerrada a presión por lo que abrirlo es cuestión de utilizar algún pequeño destornillador e ir haciendo palanca en los bordes.

![Desarmado 1][disassemble1]

Luego que lo abrimos queda simplemente quitar la plaqueta y poner una cinta aislante negra (o cualquier otra) para tapar el LED.

![Desarmado 2][disassemble2]

> El LED es mejor taparlo ya que prende para marcar que tiene energía y en el joystick va a estar prendido todo el tiempo lo cual se va a notar en la pieza y puede molestar.

---

### Instalando la pieza

![Armado][assembly]

Primero insertar la pieza 3D ya que la plaqueta es mayor a la abertura hecha.

![Armado 1][assembly1]

Insertar los tornillos desde afuera y agregar las arandelas y luego las tuercas.

![Armado 2][assembly2]

Luego poner la plaqueta con sus 4 tornillos. 

![Armado 3][assembly3]

Finalmente enchufar el USB de la plaqueta a la Raspberry Pi.

![Armado 4][assembly4]
