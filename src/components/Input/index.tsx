import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

//tem todas as propriedades de um input, mais as propriedades opcionais error e rightText
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({error, className, rightText, ...props}, ref) => {
        return (
            <InputWrapper className={className}>
                {/* Se não for preenchido, propriedades hasError é ativado exibindo em vermelho mensagem para preencher */}
                <InputStyleContainer hasError={!!error}>
                    <InputStyled {...props} ref={ref} />
                    {rightText && <RightText>{rightText}</RightText>}
                </InputStyleContainer>
                {/* Só é exibido se hasError for verdadeiro  */}
                {error && <RegularText size="s">{error}</RegularText>}
            </InputWrapper>
        )
    }
)