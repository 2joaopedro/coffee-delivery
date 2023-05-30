import { TitleText } from "../../../../components/Typography";
import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 100%;
    background: ${({theme}) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 0;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
    }
`;

export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;

    span {
        background:  ${({ theme }) => theme.colors["brand-yellow-light"]};
        color:  ${({ theme }) => theme.colors["brand-yellow-dark"]};
        font-size: ${({ theme }) => theme.textSizes["components-tag"]};
        text-transform: uppercase;
        padding: 0.25rem, 0.5rem;
        border-radius: 999px;
        font-weight: 700;
    }
`;

export const Name = styled(TitleText).attrs({
    size: "s",
    color: "subtitle",
    weight: "700"
})`
    margin-bottom: 0.5rem;
`;