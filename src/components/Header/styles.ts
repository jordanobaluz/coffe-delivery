import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${(props)=> props.theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;

    // primeira div dentro do header
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;