import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeList, OurCoffeesContainer } from "./styles";

export function OurCoffees(){
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
            <CoffeList>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeList>
        </OurCoffeesContainer>
    )
}