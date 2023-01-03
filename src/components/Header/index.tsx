import CoffeLogo from "../../assets/CoffeLogo.svg"
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={CoffeLogo}/>
            </div>
        </HeaderContainer>
    )
}