## Practica 4: Exportación + Documentación - entregables 

El objetivo principal de este proceso ha sido aislar, documentar y optimizar los componentes de la interfaz de AL-BURGUERS utilizando Storybook y Vite. La migración comenzó desde las piezas más atómicas, como los botones corporativos (Button y MenuButton), escalando de forma fluida hacia organismos globales (Navbar y Footer) hasta culminar en la recreación de páginas completas (Home, Carta, Eventos y EnConstruccion). Esto no has hecho aislar cada objeto del ecosistema para trabajar "uniendo piezas".  

Uno de los aspectos más destacables y críticos del desarrollo fue la sincronización del motor de estilos de Tailwind CSS y PostCSS dentro del servidor independiente de Storybook. Para solucionar la falta de formato inicial (aparecían los átomos sin formato por ejemplo), tuvimos que forzar la configuración del entorno. Asimismo, se configuraron viewports personalizados en las historias de la Navbar y el Footer, para intentar solucionar problemas que nos aparecían en la versión de móvil.

Como resultado, el proyecto cuenta ahora con un catálogo de componentes vivo e interactivo. Toda la lógica de  basada en la función setPagina ha quedado expuesta mediante la pestaña de Actions de Storybook, lo que permite verificar la navegación estructural de la web de manera visual. Gracias a esto, hemos logrado con total seguridad garantizar una consistencia visual en cualquier tamaño de pantalla con los diseños que ya creamos con anterioridad.

