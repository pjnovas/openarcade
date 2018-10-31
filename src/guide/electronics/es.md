[diagram]: /guide/electronics/diagram_es.png

[pcs]: /guide/electronics/pcs.jpg

[build]: /guide/electronics/build.jpg
[build0]: /guide/electronics/build0.jpg
[build1]: /guide/electronics/build1.jpg
[build2]: /guide/electronics/build2.jpg
[build3]: /guide/electronics/build3.jpg

[rpi1]: /guide/electronics/rpi1.jpg
[rpi2]: /guide/electronics/rpi2.jpg
[rpi3]: /guide/electronics/rpi3.jpg

[electronics_spacer_M3]: /guide/electronics/electronics_spacer_M3.stl

Los componentes electrónicos varían según el Modo seleccionado a construir. 
El objetivo de este paso es mostrar como se conectan entre si.

![Diagrama][diagram]

----

Cada componente tiene su pieza en impresión 3D para su exposición fuera de la caja, y para cada pieza realicé una guía específica para su instalación. La excepción es la interfaz USB del joystick, ya que para está va a depender del fabricante la disposición de los orificios para los tornillos. Para ello cree una pieza 3D pequeña para instalar en cualquier lugar de la base usando cualquier medida de la siguiente manera:

![Parts][pcs]

Por cada tornillo (o separador) a utilizar se necesita:
* 1 pieza 3D [electronics_spacer_M3.stl][electronics_spacer_M3]
* 1 tuerca M3
* 1 tornillo M3 x 10 mm
* 1 tornillo M2.5 x 6 mm

![Build 0][build0]

La instalación es simplemente marcar y agujerear la base de la caja con las medidas de la interfaz USB a usar.

![Build][build]

Luego se inserta la tuerca M3 y se instala el tornillo M3 desde afuera de la caja hacia adentro y el M2.5 es el que sujeta la electronica a la pieza de plástico (no necesita una tuerca ya que va directo sobre el plástico).

![Build 1][build1]
![Build 2][build2]
![Build 3][build3]

> La plantilla descargable posee 6 puntos, 2 para la raspberry pi (en caso de usarla) y 4 para la interfaz USB predeterminada.

A continuación algunas fotos a modo de ejemplo como quedaría con la interfaz y una raspberry pi:

![rpi 1][rpi1]
![rpi 2][rpi2]
![rpi 3][rpi3]

