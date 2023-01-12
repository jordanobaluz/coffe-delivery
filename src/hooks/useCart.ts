import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

//custom hook para acessar em qualquer lugar da aplicação o contexto de CartContext
// Dessa forma, é possível acessar informações como os itens do carrinho e suas quantidades, além de funções de adição, remoção e atualização de itens do carrinho.
export function useCart(){
    const context = useContext(CartContext);
    return context;
}