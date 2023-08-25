import { styled } from "styled-components"
import theme from "../styles/theme"
import AfterClick from "../components/main/afterClick"
import BeforeClick from "../components/main/beforeClick"
import { useRecoilValue } from "recoil"
import isClick from "../store/atom/isClick"

function Main() {
  const isClickstate = useRecoilValue(isClick)

  return (
    <MainContainer>
      <Title>{`Don't don't don`}</Title>
      {isClickstate ? <AfterClick /> : <BeforeClick />}
      <Blank />
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
`

const Title = styled.div`
  margin-top: 33px;
  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleEng};
  text-align: center;
`

const ClickMe = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const Text = styled.div`
  margin-top: 16px;

  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleEng};
  text-align: center;
  text-transform: capitalize;
`

const Blank = styled.div`
  width: 10px;
  height: 10px;
`
