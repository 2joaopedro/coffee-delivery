import { CoffeeCardContainer, Name, Tags } from "./styles"
import coffeImg from "/coffees/americano.png"
export function CoffeeCard(){
    return (
        <CoffeeCardContainer>
            <img src={coffeImg} />

            <Tags>
                <span>Tradicional</span>
            </Tags>
            <Name>Expresso Tradicional</Name>
        </CoffeeCardContainer>
    )
}