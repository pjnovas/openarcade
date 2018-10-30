[templates]: /guide/back/templates.png
[parts]: /guide/back/parts.jpg

[usbb]: /guide/back/usbb.jpg
[usbb2]: /guide/back/usbb2.jpg
[usbb3]: /guide/back/usbb3.jpg

[rpi1]: /guide/back/rpi1.jpg
[rpi2]: /guide/back/rpi2.jpg
[rpi3]: /guide/back/rpi3.jpg
[rpi4]: /guide/back/rpi4.jpg

[diagramb]: /guide/back/diagramusb.png
[conn]: /guide/back/conn.jpg

[backassembly]: /guide/back/backassembly.jpg
[backassembly1]: /guide/back/backassembly1.jpg
[backassembly2]: /guide/back/backassembly2.jpg
[backassembly3]: /guide/back/backassembly3.jpg
[backassembly4]: /guide/back/backassembly4.jpg
[backassembly5]: /guide/back/backassembly5.jpg

La parte posterior de la caja tiene 3 modos:

![Plantillas][templates]

De arriba hacia abajo (cada modo posee su pieza 3D):
1. El Modo Completo con la raspberry pi y un selector USB para la PC `rpi_back_w_selector.stl`
2. Sólo la Raspberry Pi `rpi_back.stl`
3. El último está pensado para el modo "Solo Joystick" donde no se utiliza una raspberry pi y es solo un puerto de salida USB tipo-B para conectar a la PC `USB_output.stl`

> El proyecto está pensado para usar la Raspberry Pi 3 B+, pero debería ser lo mismo para una 2. 

### Materiales  

![Partes][parts]

Dependiendo del modo elegido serán los componentes a utilizar:

Para todos:
* 2 Tornillos 5/32" x 12 mm
* 2 Tuercas __Estampadas__ 5/32" 
* 2 Arandelas Elástica Growler 5/32" 

Para el Modulo de USB tipo B (full y solo joystick):
* 2 Tuercas M3 
* 2 Tornillos M3 x 6 mm 

Si se utiliza una Raspberry Pi:
* 2 Tornillos M2.5 x 6 mm

Por último, si se utiliza el selector con la Raspberry Pi:
* Interruptor doble inversora de 6 pines
* Ficha USB Macho Tipo A

----

### Raspberry Pi

![rpi1][rpi1]

![rpi2][rpi2]

Simplemente insertar la plaqueta en la pieza 3D

![rpi3][rpi3]

Luego poner los tornillos M2.5 (no usar mucha fuerza para no romper el plástico, esos tornillos son sólo para sujetar la plaqueta no necesitan fuerza)

![rpi4][rpi4]

----

### Modulo USB Tipo-B

![usbb][usbb]

Primero agregar las tuercas M3 por debajo de la pieza (en caso de no entrar se pueden calentar las tuercas con un soldador)

![usbb3][usbb3]

Luego insertar el modulo hasta ver a través de los orificios

![usbb2][usbb2]

Ajustar la pieza usando los tornillos M3. 

> Si los tornillos M3 son mas largos la pieza no se puede pasar por la abertura del lado posterior (MDF o acrílico), para ese caso, se pueden poner los tornillos luego de insertar la pieza 3D en el MDF.

### Conexiones

En el caso del modo "Solo Joystick" simplemente se conectan los pines del modulo USB a la interfaz USB del joystick. Esta conexión va a depender de la interfaz usada pero siendo USB es conectar cada correspondiente entre sí (VCC, GND, D+, D-);

Pero en el caso del módulo con el selector USB la conexión es un poco mas compleja:

![diagrama][diagramb]

El resultado final quedaría algo asi:

![conexiones][conn]

La ficha USB macho va a la raspberry pi, los 4 cables sueltos van a la interfaz USB del joystick y el modulo hembra es para enchufar a la PC. Al cambiar el estado del switch vamos a estar cerrando el circuito entre la interfaz USB y el modulo ó bien entre la interfaz USB y la ficha macho USB (raspberry pi).

---

### Insertando la pieza

![armado][backassembly]

Para agregar la pieza 3D a la parte posterior simplemente presentarla

![armado2][backassembly2]
![armado3][backassembly3]

Agregar los tornillos desde afuera hacia adentro

![armado4][backassembly4]

Luego agregar la arandela y la tuerca de la misma manera se hizo para la caja

![armado5][backassembly5]

> La pieza puede ser agregada antes o después de armar la caja

