export default {
  app: {
    title: 'Open Arcade'
  },
  hero: {
    intro: 'Un joystick pensado para armar en casa y disfrutarlo donde quieras',
    features: {
      'small-size': {
        title: 'Fácil de llevar',
        desc: 'Pequeño y fácil de transportar, entra en una mochila.'
      },
      versatile: {
        title: 'Versátil',
        desc: 'Podes enchufarlos entre si y sumar jugadores.'
      },
      plug: {
        title: 'Enchufá y Jugá',
        desc: 'Una version con RetroPie lista para enchufar a la TV y jugar.'
      },
      joystick: {
        title: 'Modo Joystick',
        desc: 'Preparado para enchufar a la PC a otro igual y usarlo como joystick.'
      },
      diy: {
        title: 'Personalizable',
        desc: 'Armalo a tu gusto, elegí diseño, colores y disposición de botones.'
      }
    }
  },
  assembly: {
    open: 'Abrir',
    titles: {
      side_left: 'Parte Izquierda',
      side_front: 'Parte Delantera',
      side_right: 'Parte Derecha',
      side_back: 'Parte Trasera',
      side_base: 'Base',
      els: 'Eles superiores',
      panel: 'Panel de Botones',
      acrylic: 'Acrílico superior',
      ventilation: 'Botones derechos',
      legs: 'Patas',
      controls: 'Palanca y Botones Arcade',
      usb: 'USB rack',
      power_button: 'Botón de encendido',
      rpi: 'Puertos de Raspberry Pi'
    },
    links: {
      side_left: 'left',
      side_front: 'front',
      side_right: 'right',
      side_back: 'back',
      side_base: 'electronics',
      els: 'box#eles-superiores',
      panel: 'panel#armado',
      acrylic: 'panel#armado',
      ventilation: 'left#instalando-la-pieza',
      legs: 'box#patas',
      controls: 'panel',
      usb: 'right#materiales',
      power_button: 'front#diagrama-de-conexion',
      rpi: 'back#raspberry-pi'
    }
  },
  guide: {
    menu_title: 'Menú',
    step_not_found: 'Paso no encontrado',
    steps: {
      intro: {
        title: 'Introducción',
        menu: 'Introducción',
        anchors: []
      },
      modes: {
        title: 'Modos',
        menu: 'Modos',
        anchors: [
          'retropie-full',
          'retropie-cheater',
          'retropie',
          'retropie-solo',
          'joystick-cheater',
          'joystick'
        ]
      },
      box: {
        title: 'Construyendo la Caja',
        menu: 'La Caja',
        anchors: [
          'materiales',
          'plantillas',
          'frente',
          'colores',
          'patas',
          'eles-superiores',
        ]
      },
      panel: {
        title: 'Diseño de Panel de Botones',
        menu: 'Panel de Botones',
        anchors: [
          'plantillas',
          'materiales',
          'taladro',
          'avellanado',
          'armado',
          'eles-superiores',
        ]
      },
      electronics: {
        title: 'Electrónica',
        menu: 'Electrónica'
      },
      back: {
        title: 'Posterior (RaspberryPi y Salida USB)',
        menu: 'Lado Posterior',
        anchors: [
          'materiales',
          'raspberry-pi',
          'modulo-usb-tipo-b',
          'conexiones',
          'insertando-la-pieza'
        ]
      },
      left: {
        title: 'Izquierdo (Ventilación y Botones Cheat)',
        menu: 'Lado Izquierdo',
        anchors: [
          'materiales',
          'instalando-la-pieza'
        ]
      },
      right: {
        title: 'Derecho (Puertos USB)',
        menu: 'Lado Derecho',
        anchors: [
          'materiales',
          'desarmando-el-usb-switch-hub',
          'instalando-la-pieza'
        ]
      },
      front: {
        title: 'Frontal (Botón de encendido)',
        menu: 'Lado Frontal',
        anchors: [
          'materiales',
          'diagrama-de-conexion',
          'armando-los-cables',
          'insertando-los-botones',
          'configurado-la-raspberrypi'
        ]
      }
    }
  }
}
