import { styled } from "styled-components"
import theme from "../../styles/theme"

function EachRandomAmount(props) {
  return (
    <DetailLine>
      <DetailText>{props.participant[0]}</DetailText>
      <DetailText>30%</DetailText>
      <DetailText>30000원</DetailText>
    </DetailLine>
  )
}

export default EachRandomAmount

const DetailLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DetailText = styled.div`
  ${theme.fontstyles.labelKor}
  color: #102311;
`
