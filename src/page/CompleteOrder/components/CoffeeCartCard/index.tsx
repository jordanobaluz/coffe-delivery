import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffee from "../../../../../public/coffees/americano.png"
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard(){
    return(
        <CoffeeCartCardContainer>
            <div>
                <img src={coffee}/>
                <div>
                    <RegularText color="subtitle">
                        Expresso Tradicional
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"/>
                        <RemoveButton>
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}