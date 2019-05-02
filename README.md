# ¿Qué es un componente?

Los componentes en React son bloques de construcción.
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

    * ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
    * ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

# Nuestro primer componente

    Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
    Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
    El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

# Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source****.

Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

    BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    Route: Cuando hay un match con el +path+, se hace render del +component+. El component va a recibir tres props: match, history, location.
    Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
    Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.

# Hooks

Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado Hooks que permite que las funciones también tengan features que solamente tienen las clases.

Hooks: Permiten a los componentes funcionales tener características que solo las clases tienen:

    useState: Para manejo de estado.
    useEffect: Para suscribir el componente a su ciclo de vida.
    useReducer: Ejecutar un efecto basado en una acción.

Custom Hooks: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).

    useState regresa un arreglo de dos argumentos.
