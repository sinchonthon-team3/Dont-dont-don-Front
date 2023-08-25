import { styled } from "styled-components"
import { ReactComponent as Image } from "../../asset/img/clickme.svg"
import theme from "../../styles/theme"
import { useSetRecoilState } from "recoil"
import isClick from "../../store/atom/isClick"

function BeforeClick() {
  const setClick = useSetRecoilState(isClick)

  const click = () => {
    setClick(true)
  }

  return (
    <ClickMe onClick={click}>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Text>click me!</Text>
    </ClickMe>
  )
}

export default BeforeClick

const ClickMe = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -96%);
`

const Text = styled.div`
  margin-top: 70px;

  color: ${theme.colors.blue};
  ${theme.fontstyles.subtitleEng};
  text-align: center;
  text-transform: capitalize;
`
