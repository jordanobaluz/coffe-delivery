import { Intro } from "./components/Intro";
import { IntroContainer } from "./components/Intro/styles";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage(){
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}