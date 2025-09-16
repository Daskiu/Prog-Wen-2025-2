//Importar el context
import { createContext, useState } from "react";

//Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

//Crear el proveedor
export const UserProvider =({children}) => {
    const [name, setName] = useState("Random");

    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}