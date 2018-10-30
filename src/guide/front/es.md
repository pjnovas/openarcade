[init]: /guide/front/init.jpg
[parts]: /guide/front/parts.jpg
[diagram]: /guide/front/diagrampi.png

[cables]: /guide/front/cables.jpg
[cables1]: /guide/front/cables1.jpg
[cables2]: /guide/front/cables2.jpg

[assembly]: /guide/front/assembly.jpg
[assembly1]: /guide/front/assembly1.jpg
[assembly2]: /guide/front/assembly2.jpg
[assembly3]: /guide/front/assembly3.jpg
[assemblypi]: /guide/front/assemblypi.jpg

![Init][init]

El frente del joystick posee 2 botones (start y select) y un botón opcional de encendido para la Raspberry Pi.

Los botones de start y select son simplemente insertarlos y enchufarlos en la interfaz USB elegida. Me voy a concentrar en como armar el botón de encendido que es la parte compleja.

### Materiales  

![Cables][cables]

* Pulsador Momentáneo (normalmente abierto) con ó sin LED
* 4 cables Dupont Hembra-Hembra x 200 mm de largo 
* 4 terminales Faston Hembra 2.8 mm (opcional, se puede soldar directamente al pulsador)

---

### Diagrama de conexion

Glosario:

* `COM` común
* `NA` / `NO` normalmente abierto
* `NC` normalmente cerrado
* `LED+` positivo del led
* `LED-` negativo del led
* `GND` ground / negativo
* `Pin No.` Número de Pin

Dependiendo del pulsador tenemos al menos 2 pines (COM y NA), en otros podemos tenemos un pin mas de NC (sin uso) y en el caso de que tenga un LED tendremos 2 pin mas LED+ y LED-

![Diagrama][diagram]

---

### Armando los cables

Para los cables Dupont recomiendo utilizar colores para no hacer mal las conexiones, **conectar mal en la RaspberryPi puede significar quemarla**

Lo ideal es tener 2 cables del mismo color para el negativo (negro preferible) y otros 2 cables de distinto color para identificar el positivo del led y el NA del pulsador.

![Cables 1][cables1]

Cortamos los extremos de cada uno.

![Cables 2][cables2]

Agregamos los terminales Faston a cada uno.

---

### Insertando los botones

![Armado][assembly]

Una vez que tenemos los cables armados, insertamos los botones en sus respectivos agujeros.

![Armado 1][assembly1]
![Armado 2][assembly2]

Luego ponemos los cables (ver diagrama). En algunos pulsadores se puede ver cual es cual, en otros es cuestión de probar con un multímetro se puede ver cual es el NA y el COM. Para el caso del LED no se va a quemar por ponerlo al revés y en algunos casos funciona sin importar su sentido ya que están preparados para recibir voltage alterno.

![Armado 3][assembly3]

Luego conectamos los terminales de los cables a sus respectivos lugares, los botones del joystick van a la interfaz USB y los del pulsador de encendido a la RaspberryPi según diagrama.

![Armado PI][assemblypi]

> Comprobar 2 veces las conexiones, una mala conexión puede destruir la RaspberryPi.

---

### Configurado la RaspberryPi

Para que el botón de encendido funcione necesitamos hacer unos cambios en el sistema de la raspberry pi (raspbian).

[TODO]

