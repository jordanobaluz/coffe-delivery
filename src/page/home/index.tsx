import { useCart } from "../../hooks/useCart";
import { Intro } from "./components/Intro";
import { IntroContainer } from "./components/Intro/styles";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage(){
    //const {cartItem} = useCart();
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}