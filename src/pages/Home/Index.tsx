import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage(){
    return(
        <HomeContainer className="container">
            <Intro />
            <OurCoffees/>
        </HomeContainer>
    )
}