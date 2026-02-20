import { createContext } from "react";

const ThemeContext = createContext();

// const App = () => {
//    const [isDarkMode, setIsDarkMode] = useState(true);
 
//    return (
//      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//        <ComponentA />
//      </ThemeContext.Provider>
//    );
//  };
// En este ejemplo, el estado `isDarkMode` y su función para actualizarlo `setIsDarkMode` se pasan como un objeto a través del `value` del Provider, lo que permite a cualquier componente dentro del Provider acceder y modificar estos datos.

// Acceso al Contexto desde los Componentes Consumidores: Para acceder a los datos del contexto dentro de un componente, se utiliza el hook useContext(), pasándole como argumento el contexto creado. Esto permite que el componente consuma los datos proporcionados por el Provider.


// Copiar
//  import { useContext } from 'react';
 
//  const ComponentA = () => {
//    const { isDarkMode } = useContext(ThemeContext);
 
//    return <p>Dark Mode: {isDarkMode ? 'Enabled' : 'Disabled'}</p>;
//  };
// En este caso, `ComponentA` obtiene el estado `isDarkMode` directamente desde el contexto, evitando la necesidad de recibirlo como prop a través de cada nivel de la jerarquía de componentes.

// Importancia del Context Provider en la Gestión de Estados Compartidos
// El Context Provider es clave para gestionar estados compartidos en aplicaciones React, especialmente cuando los datos deben ser accesibles desde múltiples componentes distribuidos en diferentes partes de la aplicación. Algunas de sus ventajas son:

// Reducción del Props Drilling: El uso del Provider elimina la necesidad de pasar props manualmente a través de múltiples niveles de componentes, simplificando el código y mejorando la mantenibilidad.

// Mejor Organización del Estado Global: Al centralizar el manejo de ciertos estados dentro del Provider, se mantiene una estructura de código más clara y organizada.

// Escalabilidad: A medida que una aplicación crece, la capacidad de compartir estados globales de manera eficiente se vuelve esencial para mantener la integridad y rendimiento del código.

// En resumen, el Context Provider no solo simplifica la gestión de estados compartidos, sino que también mejora la estructura, claridad y mantenibilidad del código en aplicaciones React de cualquier escala.