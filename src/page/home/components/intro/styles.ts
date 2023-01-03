import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png"
// vai permitir fazer o gradiente na imagem de fundo e não causar um corte na imagem, pois estará sendo definido um gradiente
import {rgba} from 'polished'
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;

    background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const IntroContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`