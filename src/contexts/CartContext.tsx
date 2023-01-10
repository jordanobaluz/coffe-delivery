import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../page/Home/components/CoffeeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void
    changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

//cria um contexto para compartilhar dados entre os componentes
export const CartContext = createContext({} as CartContextType)

//fornece o contexto para CartContext, passando como parametro a propriedades children de CartContextProviderProps
export function CartContextProvider({children}: CartContextProviderProps){
    //inicia o estado e armazena em cartItem, usando useState para gerenciar o estado
    //o tipo é um array de CartItem
    const [ cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
        if(storedCartItems){
            return JSON.parse(storedCartItems)
        }
        return []
    });

    const cartQuantity = cartItems.length;

    //percorre os itens do carrinho e a cada iteração adiciona o valor ao total com valor inicial de total 0
    //total é o valor acumulado ao longo das iterações, cartItem é o item atualmente iterado
    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0)

    //adiciona café ao carrinho, o café é passado como argumento
    function addCoffeeToCart(coffee: CartItem){
        //procura se já existe algum café no argumento passado coffe:CartItem
        const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

        //cria uma cópia imutável do carrinho usando produce
        const newCart = produce(cartItems, (draft) => {
            
            if(coffeeAlreadyExistsInCart < 0){
                //draft é a cópia mutável do array. Onde adiciona um café ao final do array se ele não existir
                draft.push(coffee)
            }else{
                // se já existir, incrementa a quantidade
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
            }
        })
        //produce retorna o estado com as modificações, que é atribuida a cartItems. Atualizando o estado do componente e refletindo as alterações na interface do usuário
        setCartItems(newCart)
    }

    function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease'){
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

        if(coffeeExistsInCart >= 0){
            const item = draft[coffeeExistsInCart];
            draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        }
    })
        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItems, draft => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )

            //se existir no carrinho, remove o item do array, recorta o array apartir do index coffeeExistsInCart e removendo ele mesmo
            if(coffeeExistsInCart >= 0){
                draft.splice(coffeeExistsInCart, 1);
            }
        });

        setCartItems(newCart)
    }

    //sempre que os itens do carrinho forém alterados será gravado
    useEffect(() => {
        //primeiro argumento é a chave de onde será armazenado, segundo argumento é o valor que será armazenado
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <CartContext.Provider value={{ cartItems, cartQuantity,cartItemsTotal, addCoffeeToCart, changeCartItemQuantity, removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}