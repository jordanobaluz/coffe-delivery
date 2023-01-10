import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

//custom hook para acessar em qualquer lugar da aplicação o contexto de CartContext
export function useCart(){
    const context = useContext(CartContext);
    return context;
}