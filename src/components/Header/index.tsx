import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import CoffeeLogo from "../../assets/coffeelogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={CoffeeLogo} />
                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill"/>
                    </HeaderButton>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}