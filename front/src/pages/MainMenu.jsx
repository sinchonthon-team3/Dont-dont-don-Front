import { styled } from "styled-components"
import theme from "../styles/theme"
import { useNavigate } from "react-router-dom"

import drink_link_img from "../asset/img/drink_link_img.png"
import travel_link_img from "../asset/img/travel_link_img.png"
import random_link_img from "../asset/img/random_link_img.png"

function MainMenu() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>{`Don't don't don`}</Title>
      <LinkButton
        style={{ backgroundColor: `${theme.colors.gray60per}` }}
        onClick={() => navigate("/drink/participants")}
        id="drink"
      >
        <ButtonTextKr>술자리</ButtonTextKr>&nbsp;
        <ButtonTextEn>DON</ButtonTextEn>
      </LinkButton>
      <LinkButton
        style={{ backgroundColor: `${theme.colors.gray40per}` }}
        onClick={() => navigate("/travel/participants")}
        id="travel"
      >
        <ButtonTextKr>여행</ButtonTextKr>&nbsp;
        <ButtonTextEn>DON</ButtonTextEn>
      </LinkButton>
      <LinkButton
        style={{ backgroundColor: `${theme.colors.gray20per}` }}
        onClick={() => navigate("/random/participants")}
        id="random"
      >
        <ButtonTextKr>랜덤</ButtonTextKr>&nbsp;
        <ButtonTextEn>DON</ButtonTextEn>
      </LinkButton>
    </Container>
  )
}

export default MainMenu

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin-top: 33px;
  margin-bottom: 65px;
  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleEng};
  text-align: center;
`

const LinkButton = styled.button`
  width: 100%;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${theme.colors.black};
`

const ButtonTextKr = styled.span`
  ${theme.fontstyles.subtitleKor}
  font-weight: 500;
`

const ButtonTextEn = styled.span`
  ${theme.fontstyles.subtitleEng}
  font-weight: 400;
`
