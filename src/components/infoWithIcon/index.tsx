import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode // ReactNode, que pode ser qualquer elemento React, incluindo componentes personalizados
    text: string | ReactNode // pode ser tanto texto como HTML
    iconBg: string
}

export function InfoWithIcon({icon, text, iconBg}: InfoWithIconProps){
    return (
        <InfoWithIconContainer>
            <IconContainer iconBg={iconBg}>
                {icon}
            </IconContainer>
            {/* se for mesmo string, mostra mostra o p se não é um HTML */}
            {typeof text === 'string' ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}