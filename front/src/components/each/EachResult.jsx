import { styled } from "styled-components"
import theme from "../../styles/theme"

function EachResult({ eachResult }) {
  return (
    <EachResultContainer>
      <Key>{eachResult.name}</Key>
      <Value>{eachResult.change_pay}원</Value>
    </EachResultContainer>
  )
}

export default EachResult

const EachResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 30px;
`

const Key = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`

const Value = styled.div`
  color: ${theme.colors.black};
  ${theme.fontstyles.paragraphKor};
`
