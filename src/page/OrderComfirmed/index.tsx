import { RegularText, TitleText } from "../../components/Typography";
import { OderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIlustration from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../../components/infoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage(){
    const { colors } = useTheme()

    return(
        <OderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo seu café chegará até você
                </RegularText>
            </div>
            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon 
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                        <RegularText>
                            Entrega em <strong>Rua João Daniel, 102</strong>
                            <br />
                            Farrapos - Porto Alegre, RS
                        </RegularText>}
                    />
                    <InfoWithIcon 
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                        <RegularText>
                            Previsão de entrega
                            <br />
                            <strong>20min - 30min</strong>
                        </RegularText>}
                    />
                    <InfoWithIcon 
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>Cartão de Crédito</strong>
                        </RegularText>}
                    />
                </OrderDetailsContainer>
                <img src={confirmedOrderIlustration}/>
            </section>
        </OderConfirmedContainer>
    )
}