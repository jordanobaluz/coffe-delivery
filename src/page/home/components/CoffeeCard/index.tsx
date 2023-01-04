import { AddCartWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from "./styles";
import coffe from "../../../../../public/coffeList.svg"
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps){
    const formattedPrice = formatMoney(coffee.price)
    return(
        <CoffeCardContainer>
            {/* tras as imagens lá da pasta public */}
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeCardContainer>
    )
}