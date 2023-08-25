import { styled } from "styled-components"
import theme from "../../styles/theme"

function EachInput() {
  return <Input type="text" placeholder="이름 입력" className="name" />
}

export default EachInput

const Input = styled.input`
  width: 261px;
  height: 44px;
  background-color: ${theme.colors.gray60per};
  border: none;
  border-radius: 6px;
  padding: 0px 9px;
  ${theme.fontstyles.labelKor}
`
