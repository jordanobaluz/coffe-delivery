import CoffeLogo from "../../assets/CoffeLogo.svg"
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={CoffeLogo}/>
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <NavLink to="/completeOrder">
                            <ShoppingCart size={20} weight="fill" />
                        </NavLink>
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}