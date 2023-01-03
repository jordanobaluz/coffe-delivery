import { Intro } from "./components/intro";
import { IntroContainer } from "./components/intro/styles";
import { HomeContainer } from "./styles";

export function HomePage(){
    return (
        <HomeContainer>
            <Intro />
        </HomeContainer>
    )
}