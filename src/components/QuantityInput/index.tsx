import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputPorps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    size?: "medium" | "small";
}

export function QuantityInput({onIncrease, onDecrease, quantity, size = 'medium'} : QuantityInputPorps){
    return(
        <QuantityInputContainer size={size}>
            {/* desabilita se tentar selecionar produto com quantidade negativa */}
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input type="number" readOnly value={quantity}/>
            <IconWrapper onClick={onIncrease}>
                <Plus size={14} weight="fill" />
            </IconWrapper>
        </QuantityInputContainer>
    )
}